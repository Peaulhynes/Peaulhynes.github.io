import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectInfo } from '../work/projectinfo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-modal',
  standalone: true,
  templateUrl: './my-modal.html',
  imports: [CommonModule]
})

export class MyModalComponent {
  constructor(public activeModal: NgbActiveModal) {}
  @Input() projectPresentation!: ProjectInfo;
}
