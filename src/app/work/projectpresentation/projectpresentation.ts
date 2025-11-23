import {Component, input} from '@angular/core';
import {ProjectInfo} from '../projectinfo';
import { Projects } from '../projects';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-projectpresentation',
  imports: [RouterLink],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="projectPresentation().photos[0]"
        alt="Exterior photo of {{ projectPresentation().name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ projectPresentation().name }}</h2>
      <p class="listing-location">{{ projectPresentation().presentation[0] }}</p>
      <a [routerLink]="['/details', projectPresentation().id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./projectpresentation.css'],
})
export class ProjectPresentation {
  projectPresentation = input.required<ProjectInfo>();
}
