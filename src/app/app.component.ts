import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../shared/ui/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<div>
    <div drawer>
      <input id="drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <dnd-navbar />
        <div
          class="navbar-center mb-4 text-center text-lg font-medium italic text-brown-500"
        >
          🚧🚧Website under construction🚧🚧
        </div>
        <router-outlet />
      </div>
    </div>
  </div> `,
  imports: [RouterOutlet, NavbarComponent],
})
export class AppComponent {}
