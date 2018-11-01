import { Injectable } from "@angular/core";



@Injectable({
  providedIn: 'root'
})
export class FormatterService {
  public readonly phoneRegex = /^(\d{2})(\d{4,5})(\d{3,4})$/;
  constructor() { }

  public getMask() {

  }

  public phoneFormat(value: string) {
    value = (value || '').toString().trim();

    if (value === '') return '';

    const result = this.phoneRegex.exec(value);
    if (!result) {
      console.warn(`[formatter.phoneFormat] invalid value ${value}`);
      return value;
    }

    return `(${result[1]})${result[2]}-${result[3]}`;
  }


}
