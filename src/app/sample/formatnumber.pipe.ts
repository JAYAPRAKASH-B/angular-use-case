import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatnumber'
})
export class FormatnumberPipe implements PipeTransform {

  transform(value: number, unit: string = ''): string {
    if (!value && value !== 0) return '';
    return `${value.toLocaleString()} ${unit}`;
  }

}
