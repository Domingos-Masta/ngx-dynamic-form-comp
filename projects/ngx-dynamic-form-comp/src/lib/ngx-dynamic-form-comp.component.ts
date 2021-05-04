import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FieldBase } from './field-base';
import { FieldService } from './field.service';

@Component({
  selector: 'ngx-dynamic-form-comp',
  template: `<div>
            <app-dynamic-form [fields]="fields$ | async" [submmitLabel]="submmitLabel" [buttonClass]="buttonClass" [fieldClass]="fieldClass" [inputClass]="inputClass"></app-dynamic-form>
          </div>`,
  providers:  [FieldService]
})
export class NgxDynamicFormCompComponent implements OnInit {

  fields$: Observable<FieldBase<any>[]>;
  @Input() fieldsList: any[] = [];
  @Input() submmitLabel: string = 'Submmit';
  @Input() buttonClass: string = '';
  @Input() fieldClass: string = '';
  @Input() inputClass: string = '';

  constructor(private service: FieldService) {
    this.fields$ = service.getFields(this.fieldsList);
  }

  ngOnInit(): void {
    this.fields$ = this.service.getFields(this.fieldsList);
  }

}
