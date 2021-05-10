import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Checkbox, Dropdown, FieldBase, Radio, Textarea, Textbox, Richtext } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

    // TODO: get from a remote source of question metadata
    getFields(_fieldList: any[]) {

      const fields: FieldBase<string>[] = [];
      _fieldList.forEach(element => {
          switch (element.controlType) {
              case 'dropdown':
                  fields.push(new Dropdown(element));
                  break;
              case 'textbox':
                  fields.push(new Textbox(element));
                  break;
              case 'textarea':
                  fields.push(new Textarea(element));
                  break;
              case 'checkbox':
                  fields.push(new Checkbox(element));
                  break;
              case 'radio':
                  fields.push(new Radio(element));
                  break;
              case 'richtext':
                  fields.push(new Richtext(element));
                  break;
              default:
                  break;
          }
      });
  
  
      return of(fields.sort((a, b) => a.order - b.order));
    }
}
