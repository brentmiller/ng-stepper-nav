import { Component, Input } from '@angular/core';

import { StepContent } from './step-content';

/**
 * @param steps - A series of objects which each populate a single step in the
 * stepper.
 */
@Component({
  selector: 'ng-stepper-nav',
  styleUrls: ['./stepper-nav.component.scss'],
  templateUrl: './stepper-nav.component.html'
})
export class StepperNavComponent {
  @Input() steps: StepContent[];
}
