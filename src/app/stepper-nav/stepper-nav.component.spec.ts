import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { StepContent } from './step-content';
import { StepperNavComponent } from './stepper-nav.component';

describe('StepperNavComponent', () => {
  const getMockData = (): StepContent[] => {
    return [
      {
        primaryText: 'primary text'
      },
      {
        primaryText: 'primary text',
        secondaryText: 'secondary text'
      }
    ];
  };

  let fixture: ComponentFixture<StepperNavComponent>;
  let component: StepperNavComponent;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepperNavComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(StepperNavComponent);
    component = fixture.debugElement.componentInstance;
    component.steps = getMockData();
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;
  }));

  it(`should not generate a <ul> if input data is null`, () => {
    component.steps = null;
    fixture.detectChanges();
    expect(element.querySelector('ul')).toBeNull();
  });

  it(`should generate a <ul> if input data is defined`, () => {
    expect(element.querySelector('ul')).not.toBeNull();
  });

  it(`should generate a <li> for each step in the input data`, () => {
    const steps: NodeList = element.querySelectorAll('li');
    expect(steps).not.toBeNull();
    expect(steps.length).toEqual(2);
  });

  it(`should apply the final-step class to the final <li> in the list`, () => {
    const steps: NodeList = element.querySelectorAll('li.final-step');
    expect(steps[0].nextSibling).toBeNull();
  });

  it(`should not apply the final-step class to non-final <li>s in the list`, () => {
    const steps: NodeList = element.querySelectorAll('li:not(.final-step)');
    steps.forEach((step: Node) => {
      expect(step.nextSibling).not.toBeNull();
    });
  });

  it(`should generate a numbered icon for each step besides the last`, () => {
    const icons: NodeList = element.querySelectorAll('div.icon');
    expect(icons[0].textContent).toEqual('1');
  });

  it(`should generate an <h3> for steps with primary text`, () => {
    const headings: NodeList = element.querySelectorAll('h3');
    expect(headings.length).toEqual(2);
  });

  it(`should generate a <small> for steps with secondary text`, () => {
    const smalls: NodeList = element.querySelectorAll('small');
    expect(smalls.length).toEqual(1);
  });
});
