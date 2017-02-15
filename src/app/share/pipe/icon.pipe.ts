import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'icontransform'})

export class IconPipe implements PipeTransform {
  transform(icon: string): String {
    let result = '';
    switch (icon) {
      case "frontend":
        result = "frontend";
        break;
      case "backend":
        result = "backend";
        break;
      case "moblie":
        result = "moblie";
        break;
      case "lift":
        result = "lift";
        break;
      case "other":
        result = "other";
        break;
    }

    return `#${result}`;
  }
}
