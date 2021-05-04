import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FieldBase } from './field-base';
import { FieldService } from './field.service';

@Component({
  selector: 'ngx-dynamic-form-comp',
  template: `
    <div>
      <app-dynamic-form [fields]="fields$ | async" [submmitLabel]="submmitLabel"></app-dynamic-form>
    </div>
  `,
  providers:  [FieldService],
  styles: [ 
  ]
})
export class NgxDynamicFormCompComponent implements OnInit {

  fields$: Observable<FieldBase<any>[]>;
  @Input() filedList = [];
  @Input() submmitLabel: string = 'Submmit';

  constructor(service: FieldService) {
    this.fields$ = service.getFields(this.filedList);
  }

  ngOnInit(): void {
  }

}
