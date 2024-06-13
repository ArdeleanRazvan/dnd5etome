import { Component, input } from '@angular/core';
import { Spell } from '../../../shared/interfaces/spell';

@Component({
  standalone: true,
  selector: 'dnd-spells-list',
  template: `
    <div
      class="join join-vertical m-1 flex w-full bg-gradient-to-r from-amber-800 via-amber-400 to-amber-800 text-white"
    >
      <div class="mx-0.5 rounded-lg">
        @for (spell of spells(); track spell.name) {
          <div class="collapse join-item collapse-arrow my-0.5 bg-brown-900">
            <input type="checkbox" name="{{ spell.name }}" />
            <div class="collapse-title">
              <div class="flex flex-col">
                <div class="flex">
                  <img
                    class="w-8"
                    src="./assets/spells/Spell_Evocation_EldritchBlast.webp"
                    alt=""
                  />
                  <p class="sm:text:xl font-alegreya text-lg font-extrabold">
                    {{ spell.name }}
                  </p>
                </div>
              </div>
              <div>
                <p class="text-md font-alegreya font-extrabold text-brown-200">
                  Level 1 Evocation Spell
                </p>
              </div>
            </div>
            <div class="collapse-content">
              <p>Collapse Content</p>
            </div>
          </div>
        }
      </div>
    </div>
  `,
})
export class SpellsListComponent {
  spells = input.required<Spell[]>();
  getImageSourceForSpell(schoolInitial: string, name: string): string {
    const prefix = './assets/spells/Spell';
    const schoolName = this.schools.find(
      (school) => school.initial === schoolInitial,
    )?.name;
    const joinSpellName = name
      .split(' ')
      .map((word) => `${word[0].toUpperCase()}${word.substring(1)}`)
      .join('');
    const src = `${prefix}_${schoolName}_${joinSpellName}.webp`;

    return src;
  }
  schools = [
    {
      initial: 'A',
      name: 'Abjuration',
    },
    {
      initial: 'C',
      name: 'Conjuration',
    },
    {
      initial: 'D',
      name: 'Divination',
    },
    {
      initial: 'E',
      name: 'Enchantment',
    },
    {
      initial: 'V',
      name: 'Evocation',
    },
    {
      initial: 'I',
      name: 'Illusion',
    },
    {
      initial: 'N',
      name: 'Necromancy',
    },
    {
      initial: 'T',
      name: 'Transmutation',
    },
  ];
}
