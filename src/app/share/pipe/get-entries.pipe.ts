import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'getEntries'})

export class getEntriesPipe implements PipeTransform {
  transform(obj: Object): Object[]{
    let keys = Object.keys(obj);
    let entries = keys.map(key => [key, obj[key]]);
    console.log(entries);
    return entries;
  }
}
