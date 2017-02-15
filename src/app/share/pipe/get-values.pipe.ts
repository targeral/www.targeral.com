import { Pipe, PipeTransform } from '@angular/core';

let _ = require('lodash');

@Pipe({name: 'getValues'})

export class getValuesPipe implements PipeTransform {
  transform(obj: Object): any[] {
    let result = _.values(obj);
    return result;
  }
}
