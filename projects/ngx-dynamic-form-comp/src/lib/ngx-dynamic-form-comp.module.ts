import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormComponent } from './form/form.component';
import { NgxDynamicFormComponent } from './ngx-dynamic-form/ngx-dynamic-form.component';



@NgModule({
  declarations: [
    NgxDynamicFormComponent,
    FormFieldComponent,
    FormComponent,
    NgxDynamicFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [NgxDynamicFormComponent]
})
export class NgxDynamicFormCompModule { }
