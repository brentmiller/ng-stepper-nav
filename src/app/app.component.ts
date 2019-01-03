import { Component } from '@angular/core';

import { StepContent } from './stepper-nav/step-content';

/**
 * @classdesc - This component serves as the root of the project demo app. It
 * displays an instance of the StepperNavComponent and a few controls for
 * manipulating the StepperNavComponent's content.
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly title: string = 'NgStepperNav';
  readonly stepsContent: StepContent[] = [
    {
      primaryText: 'This first step has only primary text.'
    },
    {
      primaryText: 'This second step has primary and secondary text.',
      secondaryText: 'Secondary text appears smaller.',
    },
    {
      primaryText: 'The final step looks like a successful finish to the sequence. First lines can wrap as well.'
    }
  ];
}
