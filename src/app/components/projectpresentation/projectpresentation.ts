import {Component, input, Input, inject} from '@angular/core';
import { Injectable } from '@angular/core';
import {ProjectInfo} from '../projectinfo';
import {Projects} from '../projects';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal';

@Component({
  selector: 'app-projectpresentation',
  imports: [CommonModule],
  templateUrl:"projectpresentation.html",
  styleUrls: ['projectpresentation.css'],
})

@Injectable({ providedIn: 'root' })
export class ProjectPresentation {
  projectPresentation = input.required<ProjectInfo>();
  projectList: ProjectInfo[] = [];
  projects: Projects = inject(Projects);

  constructor(private modalService: NgbModal) {}

  openModal() {
    const modalRef = this.modalService.open(ModalComponent, {
    });
    modalRef.componentInstance.projectPresentation = this.projectPresentation();

  }

}
  
