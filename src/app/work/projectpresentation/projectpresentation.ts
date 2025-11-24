import {Component, input, inject} from '@angular/core';
import {ProjectInfo} from '../projectinfo';
import {Projects} from '../projects';
import { MatDialog } from '@angular/material/dialog';
import { WorkDetails } from '../workdetails/workdetails';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-projectpresentation',
  imports: [RouterLink],
  template: `
    <a class="link" [routerLink]="['/workDetails', projectPresentation().id]" data-aos="zoom-in" data-aos-once="true" class="projectimage" style="background-image:url('{{ projectPresentation().photos[0] }}')">
      <figcaption>{{ projectPresentation().name }}</figcaption>
    </a>
  `,
  styleUrls: ['./projectpresentation.css'],
})

export class ProjectPresentation {
  projectPresentation = input.required<ProjectInfo>();
  projectList: ProjectInfo[] = [];
  projects: Projects = inject(Projects);
  readonly dialog = inject(MatDialog);
  openConfirmDialog(): void {
    this.dialog.open(WorkDetails, {});
  }
  
}
  
