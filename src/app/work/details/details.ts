import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Projects} from '../projects';
import {ProjectInfo} from '../projectinfo';
@Component({
  selector: 'app-details',
  template: `
    <article>
      
    </article>
  `,
  styleUrls: ['./details.css'],
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  projects = inject(Projects);
  projectInfo: ProjectInfo | undefined;
  constructor() {
    const projectId = Number(this.route.snapshot.params['id']);
    this.projectInfo = this.projects.getProjectById(projectId);
  }
}