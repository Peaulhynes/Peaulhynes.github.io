import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    NgbModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule
  ],
  templateUrl: "app.html",
  styleUrls: ['./app.css'],
})
export class App {
  title = 'homes';
  menuOpen = false;

  private lockScroll() {
    document.body.classList.add('no-scroll');
  }

  private unlockScroll() {
    document.body.classList.remove('no-scroll');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggle() {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      this.lockScroll();
    } else {
      this.unlockScroll()
    }
  }

  close() {
    this.menuOpen = false;
    this.unlockScroll()
  }
}