import { FieldControlService } from './field-control.service';
import { Component, Input, OnInit } from '@angular/core';
import { FieldBase } from './field-base';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-dynamic-form',
    template: `
        <form (ngSubmit)="onSubmit()" [formGroup]="form">
            <div *ngFor="let field of fields" class="form-row">
                <app-dynamic-field [field]="field" [form]="form"></app-dynamic-field>
            </div>
            <div class="form-row">
                <button type="submit" [disabled]="!form.valid">{{submmitLabel}}</button>
            </div>
        </form>
        `,
    providers: [ FieldControlService ]
  })
export class DynamicFormComponent implements OnInit{

    @Input() fields: FieldBase<string>[] | null = [];
    @Input() submmitLabel: string = 'Submmit';
    form: FormGroup = new FormGroup({});
    payLoad = '';
  
    constructor(private qcs: FieldControlService) {  }
  
    ngOnInit() {
      this.form = this.qcs.toFormGroup(this.fields);
    }
  
    onSubmit() {
      this.payLoad = JSON.stringify(this.form.getRawValue());
    }

}