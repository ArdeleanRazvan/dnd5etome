import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/ui/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<div>
    <div drawer>
      <input id="drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <dnd-navbar />
        <router-outlet />
      </div>
    </div>
  </div> `,
  imports: [RouterOutlet, NavbarComponent],
})
export class AppComponent {}
