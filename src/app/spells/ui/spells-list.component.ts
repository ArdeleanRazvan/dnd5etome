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
}
