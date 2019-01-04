import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    element = fixture.debugElement.nativeElement;
  }));

  it('should create the component', () => {
    expect(component).not.toBeNull();
    expect(component).not.toBeUndefined();
  });

  it(`should have as title 'NgStepperNav'`, () => {
    expect(component.title).toEqual('NgStepperNav');
  });

  it('should create a StepperNavComponent', () => {
    expect(element.querySelector('ng-stepper-nav')).toBeDefined();
  });
});
