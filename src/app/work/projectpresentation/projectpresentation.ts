import {Component, input} from '@angular/core';
import {ProjectInfo} from '../projectinfo';
import {RouterLink} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialog } from '../../confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-projectpresentation',
  template: `

    <div data-aos="zoom-in" data-aos-once="true" (click)="openConfirmDialog()">
      <figure class="projectimage" style="background-image:url('{{ projectPresentation().photos[0] }}')">
        <figcaption>{{ projectPresentation().name }}</figcaption>
      </figure>
    </div>
  `,
  styleUrls: ['./projectpresentation.css'],
})
export class ProjectPresentation {
  projectPresentation = input.required<ProjectInfo>();
  constructor(private dialog: MatDialog) {

    }
  openConfirmDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialog, {
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
  
