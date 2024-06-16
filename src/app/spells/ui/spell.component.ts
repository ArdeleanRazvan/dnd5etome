import { Component, input } from '@angular/core';
import { Spell } from '../../../shared/interfaces/spell';
import { SpellSchoolPipe } from '../../shared/pipes/spell-school.pipe';
import { SpellSchool } from '../../../shared/interfaces/spell-school.interface';

@Component({
  standalone: true,
  selector: 'dnd-spell',
  template: `
    <div class="collapse join-item my-0.5 bg-brown-900 font-alegreya">
      <input type="checkbox" name="{{ spell().name }}" />
      <div class="collapse-title flex flex-col p-4 pr-2">
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
          </div>
          <img
            class="h-20 w-20"
            src="./assets/spells/Spell_Evocation_EldritchBlast.webp"
            alt=""
          />
        </div>
      </div>
      <div class="collapse-content"></div>
    </div>
  `,
  imports: [SpellSchoolPipe],
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
}
