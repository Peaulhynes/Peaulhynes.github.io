import { Component, inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  template: `
    <p>
      about works!
    </p>
  `,
  styles: ``,
})
export class About {
  route: ActivatedRoute = inject(ActivatedRoute);
}
