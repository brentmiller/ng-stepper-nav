import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperNavComponent } from './stepper-nav.component';

@NgModule({
  declarations: [StepperNavComponent],
  imports: [CommonModule],
  exports: [StepperNavComponent]
})
export class StepperNavModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StepperNavModule
    };
  }
}
