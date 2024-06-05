import { Component, input } from '@angular/core';
import { Spell } from '../../../shared/interfaces/spell';

@Component({
  standalone: true,
  selector: 'dnd-spells-list',
  template: `
    <div class="join join-vertical m-1 w-full text-white">
      @for (spell of spells(); track spell.name) {
        <div
          class="collapse join-item collapse-arrow border-2 border-brown-500"
        >
          <input type="checkbox" name="{{ spell.name }}" />
          <div class="collapse-title">
            <div class="flex justify-start">
              <img
                class="w-8"
                src="./assets/spells/Spell_Evocation_EldritchBlast.webp"
                alt=""
              />
              <p class="sm:text:xl text-md font-medium">{{ spell.name }}</p>
            </div>
          </div>
          <div class="collapse-content">
            <p>Collapse Content</p>
          </div>
        </div>
      }
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
