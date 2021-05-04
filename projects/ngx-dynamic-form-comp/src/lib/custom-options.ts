export class CustomOptions {
    submmitLabel: string;
    buttonClass: string;
    fieldClass: string;
    inputClass: string;

    constructor(submmitLabel?: string,
        buttonClass?: string,
        fieldClass?: string,
        inputClass?: string) {

        this.submmitLabel = submmitLabel || 'Submmit';
        this.buttonClass = buttonClass || '';
        this.fieldClass = fieldClass || '';
        this.inputClass = inputClass || '';
        }
}