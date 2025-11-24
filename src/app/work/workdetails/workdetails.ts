import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {Projects} from '../projects';
import {ProjectInfo} from '../projectinfo';
import {ActivatedRoute} from '@angular/router';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-work-details',
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './workdetails.html',
  styleUrl: './workdetails.css'
})
export class WorkDetails {
  route: ActivatedRoute = inject(ActivatedRoute);
  projectPresentation: ProjectInfo | undefined;
  projects: Projects = inject(Projects);
  constructor() {
    const projectId = parseInt(this.route.snapshot.params['id'], 10);
    this.projectPresentation = this.projects.getProjectById(projectId);
   }
  }
