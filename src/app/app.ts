import { Component } from '@angular/core';

import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `

  <main>
  <div class="navbar-area">
      <div class="header-container">
        <nav class="site-navbar">
          <div class="site-logo"></div>

          <ul>
            <li><a [routerLink]="['/']">ACCUEIL</a></li>
            <li><a [routerLink]="['/about']">A PROPOS</a></li>
            <li><a [routerLink]="['/work']">PROJETS</a></li>
          </ul>

          <button class="nav-toggler">
            <span></span>
          </button>
        </nav>
      </div>
      </div>
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