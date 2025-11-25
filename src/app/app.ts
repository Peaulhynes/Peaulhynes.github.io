import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    RouterLink,
    NgbModule
  ],
  templateUrl: "app.html",
  styleUrls: ['./app.css'],
})
export class App {
  title = 'homes';
  
}