import { PipeTransform, Pipe } from "@angular/core";
import { FormatterService } from "./formatter.service";



@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  public constructor(public formatter: FormatterService) { }


  transform(value: number | string): any {
    return this.formatter.phoneFormat(value.toString());
  }
}
