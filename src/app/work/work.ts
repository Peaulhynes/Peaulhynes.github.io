import { Component, inject, input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectPresentation} from './projectpresentation/projectpresentation';
import {Projects} from './projects';
import {ProjectInfo} from './projectinfo';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-work',
  imports: [ProjectPresentation],
  template: `
  <div style="text-align:center; margin-top: 100px;">
  <h1>Angular Material Dialog Example</h1>
  <button mat-raised-button color="primary" (click)="openConfirmDialog()">
    Open Confirm Dialog
  </button>
</div>
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
  constructor(private dialog: MatDialog) {
    this.projectList = this.projects.getAllProjects();
  }
  openConfirmDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '350px',
      data: { message: 'Are you sure you want to proceed?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('User confirmed');
      } else {
        console.log('User cancelled');
      }
    });
  }

}
