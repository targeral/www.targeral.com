import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'getValues'})

export class getValuesPipe implements PipeTransform {
  transform(obj: Object): any[] {
    let result = Object.values(obj);
    console.log(obj, result);
    return result;
  }
}
