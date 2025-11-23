import { Component, inject, input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectPresentation} from './projectpresentation/projectpresentation';
import {Projects} from './projects';
import {ProjectInfo} from './projectinfo';

@Component({
  selector: 'app-work',
  imports: [ProjectPresentation],
  template: `
  <div id="gallery">
    
      @for(projects of projectList; track $index) {
        <app-projectpresentation [projectPresentation]="projects" />
      }
    
  </div>
  `,
  styleUrls: ['./work.css'],
})
export class Work {
  route: ActivatedRoute = inject(ActivatedRoute);
  projectList: ProjectInfo[] = [];
  projects: Projects = inject(Projects);
  constructor() {
    this.projectList = this.projects.getAllProjects();
  }
}
