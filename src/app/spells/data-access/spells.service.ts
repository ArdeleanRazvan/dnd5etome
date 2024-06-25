import { Injectable, computed, inject, signal } from '@angular/core';
import { Spellbook } from '../../../shared/interfaces/spellbook';
import { combineLatest, from, mergeMap, switchMap, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Damage, Spell } from '../../../shared/interfaces/spell';
import { FiveEToolsService } from '../../../shared/data-access/5eTools.service';

export interface SpellsState {
  spellbooks: Spellbook[];
  spells: Spell[];
}

@Injectable({
  providedIn: 'root',
})
export class SpellsService {
  fiveEtoolsService = inject(FiveEToolsService);

  //state
  public state = signal<SpellsState>({
    spellbooks: [],
    spells: [],
  });

  //selectors
  spellbooks = computed(() => this.state().spellbooks);
  spells = computed(() =>
    this.state()
      .spellbooks.map((spellbook) => spellbook.spells)
      .flat(),
  );

  //sources
  private spellbooks$ = combineLatest([
    this.fiveEtoolsService.requestSpellbooks(),
    this.fiveEtoolsService.requestGeneralBooksData(),
  ]).pipe(
    switchMap(([spellbooks, genBooksData]) => {
      spellbooks.forEach(
        (spellbook) =>
          (spellbook.name = genBooksData.find(
            (bookData) => bookData.id == spellbook.id,
          )?.name),
      );
      return from(spellbooks);
    }),
  );

  private spells$ = this.spellbooks$.pipe(
    mergeMap((spellbook) =>
      this.fiveEtoolsService.requestSpellsInBook(spellbook.jsonFileName),
    ),
  );

  constructor() {
    //reducers
    this.spellbooks$.pipe(takeUntilDestroyed()).subscribe((spellbook) =>
      this.state.update((state) => ({
        ...state,
        spellbooks: [...state.spellbooks, spellbook],
      })),
    );

    this.spells$.pipe(takeUntilDestroyed()).subscribe((response) =>
      this.state.update((state) => ({
        ...state,
        spellbooks: state.spellbooks.map((spellbook) =>
          spellbook.id === response.spell[0].source
            ? {
                ...spellbook,
                spells: response.spell.map((spell) =>
                  this.extractSpellDamage(spell),
                ),
              }
            : spellbook,
        ),
      })),
    );
  }

  private extractSpellDamage(spell: Spell): Spell {
    if (!spell.entries) return spell;

    spell.damage = [];

    spell.entries.forEach((entry) => {
      if (typeof entry === 'string') {
        const damagePattern = /\{@damage (\d+d\d+)\} (\w+) damage/g;
        const damageMatches = entry.matchAll(damagePattern);
        for (const match of damageMatches) {
          const isDamageTypePresent = spell.damage.some(
            (damage) => damage.type === match[2],
          );

          if (!isDamageTypePresent) {
            spell.damage.push({
              value: match[1],
              type: match[2],
              conditional: false,
            });
          }
        }
      }
    });

    return spell;
  }
}
