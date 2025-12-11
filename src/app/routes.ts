import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Skills } from './pages/skills/skills';
import { Work } from './pages/work/work';

const routeConfig: Routes = [
  {
    path: '',
    component: About,
    title: 'Pauline Wargny',
  },
  {
    path: 'skills',
    component: Skills,
    title: 'Pauline Wargny',
    loadComponent: () =>
      import('./pages/skills/skills').then(m => m.Skills)
  },
  {
    path: 'work',
    component: Work,
    title: 'Pauline Wargny',
    loadComponent: () =>
      import('./pages/work/work').then(m => m.Work)
  }
];
export default routeConfig;