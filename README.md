# ng-stepper-nav

An Angular component which displays a stacked sequence of steps. Use it to provide navigation, display information, or both. The Material Design language's [List Component](https://material.io/design/components/lists.html) inspired this component's visual design.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Installation

```shell
npm install --save ng-stepper-nav
```

## Usage

Add `StepperNavModule` to your app module:

```typescript
import { StepperNavModule } from 'ng-stepper-nav';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, StepperNavModule.forRoot()]
})
class AppModule {}
```

In your app component, simply add a `<ng-stepper-nav>` element, passing it the content via its `steps` input parameter. The `StepContent` interface is available for typing the content.

```typescript
import { StepContent } from 'ng-stepper-nav';

@Component({
  selector: 'app',
  template: `
    <ng-stepper-nav [steps[]="content"></ng-stepper-nav>
  `
})
class AppComponent {
  content: StepContent[] = [
    {
      primaryText: 'Steal the Millenium Falcon.',
    },
    {
      primaryText: 'Fix the hyperdrive.',
      secondaryText: `It's broken. Again.`
    },
    {
      primaryText: 'Rejoin the Resistance fleet.'
    }
  ];
}
```

## Behavior

The component renders a series of zero-to-many list items, using semantic `<ol>` and `<li>` elements. All steps except the last step display the step's number in an icon, while the final step displays a checkmark in an icon. Each step displays its primary text at the standard font size (`1rem`) and its optional secondary text at a smaller font size (`0.875rem`).

The component's `steps` input parameter is required. If the input is undefined, null, or an empty array, the component will not render anything.

## Inputs

The stepper nav component has a single input.

| Name | Type | Description |
| - | - | - |
| `steps` | StepContent[] | An array of objects, each of which populates a single step. The order of the objects dictates the order of the rendered steps. |

## Development

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
