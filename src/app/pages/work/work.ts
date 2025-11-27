import { Component, inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectPresentation} from '../../components/projectpresentation/projectpresentation';
import {Projects} from '../../components/projects';
import {ProjectInfo} from '../../components/projectinfo';

@Component({
  selector: 'app-work',
  imports: [ProjectPresentation],
  templateUrl:"work.html",
  styleUrls: ['work.css'],
})
export class Work {
  route: ActivatedRoute = inject(ActivatedRoute);
  projectList: ProjectInfo[] = [];
  projects: Projects = inject(Projects);
  constructor() {
    this.projectList = this.projects.getAllProjects();
  }
}
