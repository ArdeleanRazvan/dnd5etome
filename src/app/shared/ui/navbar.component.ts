import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'dnd-navbar',
  template: ` <div>
    <div class="bg-brown-900 navbar">
      <div
        class="navbar-start flex justify-start gap-1 hover:underline focus:underline"
      >
        <a class="h-auto" routerLink="/spells">
          <img
            class="w-20"
            src="./assets/DnD-Spellbook-192px.png"
            alt="Should be spellbook icon..."
          />
        </a>
        <a routerLink="/spells" class="text-brown-500 mb-4 text-3xl font-bold">
          D&D 5e Tome
        </a>
      </div>
      <div class="text-brown-500 navbar-center mb-4 text-lg font-medium italic">
        🚧🚧Website under construction🚧🚧
      </div>
      <div class="navbar-end"></div>
    </div>
  </div>`,
  imports: [RouterLink],
})
export class NavbarComponent {}
