import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

let moment = require('moment');

@Pipe({name: 'blogmsg'})

export class BlogMsgPipe implements PipeTransform {
  transform(arr: any[]): String {
    let key = arr[0];
    let result;
    switch (key) {
      case "author":
        result = arr[1];
        break;
      case "date":
        result = moment(arr[1]).format('YYYY-MM-DD');
        break;
      case "comment":
        result = arr[1] + " 条评论";
        break;
      default:
        result = 'default';
        break;
    }

    return result;
  }
}
