import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FieldService } from '../core';
import { CustomOptions, FieldBase } from '../models';

@Component({
  selector: 'lib-ngx-dynamic-form',
  templateUrl: './ngx-dynamic-form.component.html',
  styleUrls: ['./ngx-dynamic-form.component.css'],
  providers:  [FieldService]
})
export class NgxDynamicFormComponent implements OnInit {

  fields$: Observable<FieldBase<any>[]>;
  @Input() fieldsList: any[] = [];
  @Input() customOptions: CustomOptions = new CustomOptions();
  @Input() onSubmmitForm = (form: FormGroup):void => {};

  constructor(private service: FieldService) {
    this.fields$ = service.getFields(this.fieldsList);
  }

  ngOnInit(): void {
    this.fields$ = this.service.getFields(this.fieldsList);
  }

}
