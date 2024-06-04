import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'dnd-navbar',
  template: ` <div>
    <div class="navbar bg-brown-900">
      <div
        class="navbar-start flex w-auto justify-start gap-1 hover:underline focus:underline"
      >
        <a class="h-auto" routerLink="/spells">
          <img
            class="w-14 sm:w-20"
            src="./assets/DnD-Spellbook-192px.png"
            alt="Should be spellbook icon..."
          />
        </a>
        <a
          routerLink="/spells"
          class="mb-2 text-xl font-bold text-brown-500 sm:mb-4 sm:text-3xl"
        >
          D&D 5e Tome
        </a>
      </div>
    </div>
  </div>`,
  imports: [RouterLink],
})
export class NavbarComponent {}
