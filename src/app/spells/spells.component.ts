import { Component, inject } from '@angular/core';
import { SpellsListComponent } from './ui/spells-list.component';
import { SpellsService } from './data-access/spells.service';

@Component({
  standalone: true,
  selector: 'dnd-spells',
  template: `
    <div class="flex w-full justify-center">
      <dnd-spells-list
        class="container flex justify-center"
        [spells]="spellsService.spells()"
      />
    </div>
  `,
  imports: [SpellsListComponent],
})
export default class SpellsComponent {
  spellsService = inject(SpellsService);
}
