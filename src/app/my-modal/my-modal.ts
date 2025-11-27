import { Component, Input, ViewEncapsulation  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectInfo } from '../work/projectinfo';
import { CommonModule } from '@angular/common';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

@Component({
  selector: 'app-my-modal',
  standalone: true,
  templateUrl: './my-modal.html',
  styleUrls: ['./my-modal.css'],
  imports: [CommonModule, MdbCarouselModule],
  encapsulation: ViewEncapsulation.None
})

export class MyModalComponent {
  constructor(public activeModal: NgbActiveModal) {}
  @Input() projectPresentation!: ProjectInfo;
}
