import { Component, input } from '@angular/core';
import { Damage, Spell } from '../../../shared/interfaces/spell';
import { SpellSchoolPipe } from '../../shared/pipes/spell-school.pipe';
import { SpellSchool } from '../../../shared/interfaces/spell-school.interface';
import { NgClass } from '@angular/common';
import { DamageColor } from '../../../shared/interfaces/damage-color.interface';

@Component({
  standalone: true,
  selector: 'dnd-spell',
  template: `
    <div class="collapse join-item my-0.5 bg-brown-900 font-alegreya">
      <input type="checkbox" name="{{ spell().name }}" />
      <div class="collapse-title flex flex-col py-2 pl-4 pr-2">
        <div class="flex items-center justify-between">
          <div class="flex flex-col">
            <p class="sm:text:xl text-lg font-extrabold">
              {{ spell().name }}
            </p>
            <p class="text-md font-extrabold text-brown-200">
              {{ spell().level > 0 ? 'Level ' + spell().level : '' }}
              {{ spell().school | school: schools }}
              {{ spell().level > 0 ? 'Spell' : 'Cantrip' }}
            </p>
            <div class="flex flex-col gap-0.5">
              @for (damage of spell().damage; track $index) {
                <div class="flex items-center font-semibold">
                  <img
                    class="mr-1 h-7 w-7"
                    [src]="getDiceRollIcon(damage)"
                    alt=""
                  />
                  <p [ngClass]="getDamageTypeColor(damage)">
                    {{ damage.value }}
                  </p>
                  <img
                    class="h-6 w-6"
                    [src]="getDamageTypeIcon(damage)"
                    alt=""
                  />
                  <p [ngClass]="getDamageTypeColor(damage)">
                    {{ damage.type }}
                  </p>
                </div>
              }
            </div>
          </div>
          <img class="h-12 w-12" [src]="getSpellImageSrc(spell())" alt="" />
        </div>
      </div>

      <div class="collapse-content">
        @for (entry of spell().entries; track $index) {
          <p class="text-md text-wrap break-all text-brown-200">
            {{ entry }}
          </p>
        }
      </div>
    </div>
  `,
  imports: [SpellSchoolPipe, NgClass],
})
export class SpellComponent {
  spell = input.required<Spell>();
  schools: Array<SpellSchool> = [
    { initial: 'A', name: 'Abjuration' },
    { initial: 'C', name: 'Conjuration' },
    { initial: 'D', name: 'Divination' },
    { initial: 'E', name: 'Enchantment' },
    { initial: 'V', name: 'Evocation' },
    { initial: 'I', name: 'Illusion' },
    { initial: 'N', name: 'Necromancy' },
    { initial: 'T', name: 'Transmutation' },
  ];

  getSpellImageSrc(spell: Spell): string {
    const prefix = './assets/spells/Spell';

    const schoolName = this.schools.find(
      (school) => school.initial === spell.school,
    )?.name;

    const joinSpellName = spell.name
      .split(' ')
      .map((word) => `${word[0].toUpperCase()}${word.substring(1)}`)
      .join('');

    return `${prefix}_${schoolName}_${joinSpellName}.webp`;
  }

  getDiceRollIcon(damage: Damage): string {
    const damageValue =
      damage.value.indexOf('d') > 1
        ? damage.value.substring(2)
        : damage.value.substring(1);
    const damageType =
      damage.type === 'bludgeoning' ||
      damage.type === 'slashing' ||
      damage.type === 'piercing'
        ? 'physical'
        : damage.type;

    return `./assets/dice/${damageValue}_${damageType}.webp`;
  }

  getDamageTypeIcon(damage: Damage): string {
    return `./assets/damage_types/${damage.type}_damage_icon.webp`;
  }

  getDamageTypeColor(damage: Damage): string {
    const damageType =
      damage.type === 'bludgeoning' ||
      damage.type === 'slashing' ||
      damage.type === 'piercing'
        ? 'physical'
        : damage.type;

    const damageTypeColor: Array<DamageColor> = [
      {
        type: 'acid',
        color: 'text-lime-500',
      },
      {
        type: 'cold',
        color: 'text-sky-600',
      },
      {
        type: 'fire',
        color: 'text-orange-600',
      },
      {
        type: 'force',
        color: 'text-red-700',
      },
      {
        type: 'healing',
        color: 'text-teal-400',
      },
      {
        type: 'lightning',
        color: 'text-blue-600',
      },
      {
        type: 'necrotic',
        color: 'text-green-700',
      },
      {
        type: 'physical',
        color: 'text-gray-400',
      },
      {
        type: 'poison',
        color: 'text-lime-600',
      },
      {
        type: 'psychic',
        color: 'text-pink-400',
      },
      {
        type: 'radiant',
        color: 'text-yellow-400',
      },
      {
        type: 'thunder',
        color: 'text-violet-600',
      },
    ];

    const damageColor = damageTypeColor.find(
      (damageColor) => damageColor.type === damageType,
    );
    return damageColor?.color ? damageColor.color : 'text-slate-200';
  }
}
