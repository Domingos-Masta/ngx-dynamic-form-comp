import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldBase } from "./field-base";

@Component({
    selector: 'app-dynamic-field',
    template: `
        <div [formGroup]="form">
            <label [attr.for]="field.key">{{field.label}}</label>

            <div [ngSwitch]="field.controlType">

                <input *ngSwitchCase="'textbox'" [formControlName]="field.key"
                        [id]="field.key" [type]="field.type">

                <select [id]="field.key" *ngSwitchCase="'dropdown'" [formControlName]="field.key">
                <option *ngFor="let opt of field.options" [value]="opt.key">{{opt.value}}</option>
                </select>

            </div>

            <div class="errorMessage" *ngIf="!isValid">{{field.label}} is required</div>
        </div>
    `
})
export class DynamicFormFieldComponent {
    @Input() field: FieldBase<string> = new FieldBase();
    @Input() form: FormGroup = new FormGroup({});
    get isValid() { return this.form.controls[this.field.key].valid; }
}

