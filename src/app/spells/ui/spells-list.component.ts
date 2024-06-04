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

          <div class="sm:text:xl text-md collapse-title font-medium">
            <img
              class="w-12"
              [src]="getImageSourceForSpell(spell.school, spell.name)"
            />
            {{ spell.name }}
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
    const src = `../../assets/spells/Spell_${this.schools.find((school) => school.initial === schoolInitial)?.name}_${name.split(' ').join('')}.webp`;
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
