import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldBase } from '../../../models/field-base';

@Injectable({
  providedIn: 'root'
})
export class FieldControlService {
  constructor() { }

  toFormGroup(fields: FieldBase<string>[] | null) {
    const group: any = {};
    if (fields) {
      fields.forEach(field => {
        group[field.key] = field.required ? new FormControl(field.value || '', Validators.required)
          : new FormControl(field.value || '');
      });
    }
    return new FormGroup(group);
  }
}
