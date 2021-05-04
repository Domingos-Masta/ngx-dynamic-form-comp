import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { FieldBase } from "./field-base";
import { Dropdown } from './form-drop-down';
import { Textbox } from './form-textbox';

@Injectable()
export class FieldService {

  // TODO: get from a remote source of question metadata
  getFields(_fieldList: any[]) {

    let fields: FieldBase<string>[] = [];
    _fieldList.forEach(element => {
        switch (element.kindof) {
            case 'dopdown':
                fields.push(new Dropdown(element));
                break;
            case 'textbox':
                fields.push(new Textbox(element));
                break;
            default:
                break;
        }
    });


    return of(fields.sort((a, b) => a.order - b.order));
  }
}
