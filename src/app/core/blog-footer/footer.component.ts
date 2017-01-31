import { Component } from '@angular/core';

let template = require('./footer.component.html');
let style = require('./footer.component.scss');

@Component({
  selector: 'blog-footer',
  template: template,
  styles: [ style ]
})

export class FooterComponent { }
