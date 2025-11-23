import {Routes} from '@angular/router';
import {Home} from './home/home';
import { About } from './about/about';
import { Work } from './work/work';
import { Contact } from './contact/contact';
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
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact',
  },
];
export default routeConfig;