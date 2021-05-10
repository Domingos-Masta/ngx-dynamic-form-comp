# NgxDynamicFormComp

This is a library help build reactive forms dynamicaly in angular.
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.9.

## USE

### Importing in NgModule

  Install `npm i ngx-dynamic-form-comp`

  Import `NgxDynamicFormCompModule` In module you want to use this component.

  `import { NgxDynamicFormCompModule } from 'ngx-dynamic-form-comp';`

  `@NgModule({`
    `declarations: [`
     `AppComponent`
   ` ],`
   ` imports: [`
    `  ...`
    `  NgxDynamicFormCompModule`
    `  ....`
  `  ],`
    `providers: [],`
   ` bootstrap: [AppComponent]`
 ` })`
  `export class AppModule { }`


### Field List and custom options


  `fieldList = [`
      `{`
      `  controlType:'textbox',`
      `  key: 'firstName',`
      ` label: 'First name',`
      `  value: 'Bombasto',`
      `  required: true,`
      `  order: 1`
      `},`
     ` {`
       ` controlType:'dropdown',`
       ` key: 'brave',`
       ` label: 'Bravery Rating',`
      ` options: [`
        `  {key: 'solid',  value: 'Solid'},`
        `  {key: 'great',  value: 'Great'},`
        `  {key: 'good',   value: 'Good'},`
        `  {key: 'unproven', value: 'Unproven'}`
        `],`
        `order: 3`
      `}];`

  `options: CustomOptions = { submmitLabel: 'Submmit',buttonClass: 'my-css-button-class', fieldClass: 'my-form-grou-custom-class', inputClass: 'my-css-input-class'}`;

#### Calling in a component

  In html Compontent.

    `<ngx-dynamic-form-comp [fieldsList]="localFiledList" [customOptions]="options" [onSubmmitForm]="onSubmmit"></ngx-dynamic-form-comp>`

  On Ts Component 

    `onSubmmit = (form: FormGroup) => {`
      `console.log('Form Enviado para fora', form);`
    `}`

    this method with capture the form after click event on submmit button.

#### Extra options

    `<ngx-dynamic-form-comp [fieldsList]="localFiledList" [customOptions]="options" [onSubmmitForm]="onSubmmit"></ngx-dynamic-form-comp>`

    `fieldsList:` List of field in form
    `submmitLabel:` Label on subbmit button
    `buttonClass:` Css class form submmit button
    `formGroupClass:` Css class for field group
    `inputClass:` Css class for input element

## Further help
  To get more help https://github.com/Domingos-Masta/ngx-dynamic-form-comp/issues

## License

MIT

## By

Domingos M. Fernando
