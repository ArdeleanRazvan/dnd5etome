import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'spells',
    loadComponent: () => import('./spells/spells.component'),
  },
  {
    path: '',
    redirectTo: 'spells',
    pathMatch: 'full',
  },
];
