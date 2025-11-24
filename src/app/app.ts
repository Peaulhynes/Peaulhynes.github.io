import { Component } from '@angular/core';

import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <main>
      <a [routerLink]="['/']">HOME</a>
      <a [routerLink]="['/about']">ABOUT</a>
      <a [routerLink]="['/work']">WORK</a>

      <section class="content">
        <router-outlet />
      </section>
    </main>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'homes';
  
}