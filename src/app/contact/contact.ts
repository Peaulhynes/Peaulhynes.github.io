import { Component, inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [],
  template: `
    <p>
      contact works!
    </p>
  `,
  styles: ``,
})
export class Contact {
  route: ActivatedRoute = inject(ActivatedRoute);
}
