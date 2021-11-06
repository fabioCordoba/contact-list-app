import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): any {
    let finalString = '';
    for (let str of value.split(' ')) {
      finalString += str.trim().charAt(0).toUpperCase() + str.slice(1) + ' ';
      
    }
    return finalString;
  }

}
