import { DynamicFormComponent } from './dynamic-form.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDynamicFormCompComponent } from './ngx-dynamic-form-comp.component';
import { DynamicFormFieldComponent } from './dynamic-form-field.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NgxDynamicFormCompComponent,
    DynamicFormFieldComponent,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [NgxDynamicFormCompComponent]
})
export class NgxDynamicFormCompModule { }
