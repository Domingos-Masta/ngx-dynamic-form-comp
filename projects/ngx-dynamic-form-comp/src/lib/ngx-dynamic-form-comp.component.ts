import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FieldBase } from './field-base';
import { FieldService } from './field.service';
import { CustomOptions } from './custom-options';

@Component({
  selector: 'ngx-dynamic-form-comp',
  template: `<div>
            <app-dynamic-form [fields]="fields$ | async" [submmitLabel]="customOptions.submmitLabel" [buttonClass]="customOptions.buttonClass" [fieldClass]="customOptions.fieldClass" [inputClass]="customOptions.inputClass"></app-dynamic-form>
          </div>`,
  providers:  [FieldService]
})
export class NgxDynamicFormCompComponent implements OnInit {

  fields$: Observable<FieldBase<any>[]>;
  @Input() fieldsList: any[] = [];
  @Input() customOptions: CustomOptions = new CustomOptions();

  constructor(private service: FieldService) {
    this.fields$ = service.getFields(this.fieldsList);
  }

  ngOnInit(): void {
    this.fields$ = this.service.getFields(this.fieldsList);
  }

}
