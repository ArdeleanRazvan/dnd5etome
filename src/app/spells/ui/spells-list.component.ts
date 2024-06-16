import { Component, input } from '@angular/core';
import { Spell } from '../../../shared/interfaces/spell';
import { SpellComponent } from './spell.component';

@Component({
  standalone: true,
  selector: 'dnd-spells-list',
  template: `
    <div
      class="join join-vertical m-1 flex w-80 bg-gradient-to-r from-amber-800 via-amber-400 to-amber-800 text-white"
    >
      <div class="mx-0.5 rounded-lg">
        @for (spell of spells(); track spell.name) {
          <dnd-spell [spell]="spell" />
        }
      </div>
    </div>
  `,
  imports: [SpellComponent],
})
export class SpellsListComponent {
  spells = input.required<Spell[]>();
}
