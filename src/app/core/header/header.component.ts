import { Component, ElementRef, Input, Output } from '@angular/core';

let template = require('./header.component.html');
let style = require('./header.component.scss');

@Component({
  selector: 'blog-header',
  template: template,
  styles: [ style ]
})

export class HeaderComponent {
  onOpened(on: boolean) {
    console.log('this is Header Component');
    console.log(on);
    this.resizeHeight(on);
  }
  private hshort = false;
  private resizeHeight(flag: boolean) {
    console.log('this is resizeHeight');
    this.hshort = flag;
  }

}
