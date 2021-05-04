# NgxDynamicFormComp

This is a library help build reactive forms dynamicaly in angular.
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.9.

## USE

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


## USE


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

  `submmitLabel:string = 'Submmit'`;

#### Calling in a component

    `<ngx-dynamic-form-comp [fieldsList]="fieldList" [submmitLabel]="'Enviar'"></ngx-dynamic-form-comp>`

#### Extra options

    `<ngx-dynamic-form-comp [fieldsList]="localFiledList" [submmitLabel]="'Enviar'" [buttonClass]="'btn btn-primary'" [fieldClass]="'form-group'" [inputClass]="'form-control'"></ngx-dynamic-form-comp>`

    `fieldsList:` List of field in form
    `submmitLabel:` Label on subbmit button
    `buttonClass:` Css class form submmit button
    `fieldClass:` Css class for field group
    `inputClass:` Css class for input element

## Further help
  To get more help...

## License

LGPL

## By

Domingos M. Fernando
