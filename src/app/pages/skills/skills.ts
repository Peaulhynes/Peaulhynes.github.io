import { Component, inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: "skills.html",
  styleUrls: ["skills.css"],
})

export class Skills {
  route: ActivatedRoute = inject(ActivatedRoute);
}
