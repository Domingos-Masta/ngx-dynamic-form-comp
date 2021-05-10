import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldControlService } from '../core';
import { FieldBase } from '../models';

@Component({
  selector: 'lib-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ FieldControlService ]
})
export class FormComponent implements OnInit {

  @Input() fields: FieldBase<string>[] | null = [];
  @Input() submmitLabel: string = 'Submmit';
  @Input() buttonClass: string = '';
  @Input() formGroupClass: string = '';
  @Input() inputClass: string = '';
  form: FormGroup = new FormGroup({});
  @Input() onSubmmitForm = (form: FormGroup):void => {};
  payLoad = '';

  constructor(private qcs: FieldControlService) {  }

  ngOnInit() {      
    this.form = this.qcs.toFormGroup(this.fields);
  }

  onSubmit() {
    // this.payLoad = JSON.stringify(this.form.getRawValue());
    this.onSubmmitForm(this.form);
  }

}
