import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StepperNavModule } from './stepper-nav/stepper-nav.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StepperNavModule.forRoot()],
  bootstrap: [AppComponent]
})
export class AppModule {}
