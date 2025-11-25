import {Routes} from '@angular/router';
import {Home} from './home/home';
import { About } from './about/about';
import { Work } from './work/work';
const routeConfig: Routes = [
  {
    path: '',
    component: Home,
    title: 'Pauline Wargny',
  },
  {
    path: 'about',
    component: About,
    title: 'Pauline Wargny',
  },
  {
    path: 'work',
    component: Work,
    title: 'Pauline Wargny',
  }
];
export default routeConfig;