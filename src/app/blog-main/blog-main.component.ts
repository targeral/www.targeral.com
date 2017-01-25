import { Component } from '@angular/core';

let template = require('./blog-main.component.html');
let style = require('./blog-main.component.scss');

@Component({
  selector: 'blog-main',
  template: template,
  styles: [ style ],
})

export class BlogMainComponent { }
