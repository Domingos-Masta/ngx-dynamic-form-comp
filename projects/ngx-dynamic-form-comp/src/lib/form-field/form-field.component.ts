import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from '../models';

@Component({
  selector: 'lib-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
  providers:[]
})
export class FormFieldComponent {
  
  @Input() field: FieldBase<string> = new FieldBase();
  @Input() form: FormGroup = new FormGroup({});
  @Input() formGroupClass: string = '';
  @Input() inputClass: string = '';
  get isValid() { return this.form.controls[this.field.key].valid; }

}
