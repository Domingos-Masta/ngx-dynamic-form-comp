export class CustomOptions {
    submmitLabel: string;
    buttonClass: string;
    formGroupClass: string;
    useMaterial: boolean;
    inputClass: string;

    constructor(useMaterial?: boolean, submmitLabel?: string,
        buttonClass?: string,
        formGroupClass?: string,
        inputClass?: string) {

        this.submmitLabel = submmitLabel || 'Submmit';
        this.useMaterial = useMaterial || false;
        this.buttonClass = buttonClass || '';
        this.formGroupClass = formGroupClass || '';
        this.inputClass = inputClass || '';
    }
}