import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'getKeys'})

export class getKeysPipe implements PipeTransform {
  transform(obj: Object): string[] {
    return Object.keys(obj);
  }
}

