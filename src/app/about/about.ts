import { Component, inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: "about.html",
  styleUrls: ["about.css"],
})
export class About {
  readonly baseUrl = '../assets/icons';
  route: ActivatedRoute = inject(ActivatedRoute);
  
}
