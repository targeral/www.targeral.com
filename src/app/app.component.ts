import { Component } from '@angular/core';

let appTpl = require('./app.component.html');
let appStyle = require('./app.component.scss');

@Component({
  selector: 'blog-app',
  template: appTpl,
  styles: [appStyle]
})

export class AppComponent { }
