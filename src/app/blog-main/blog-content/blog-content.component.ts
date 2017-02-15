import { Component, OnInit } from '@angular/core';

let template = require('./blog-content.component.html');
let style = require('./blog-content.component.scss');

@Component({
  selector: 'blog-content',
  template: template,
  styles: [ style ]
})

export class BlogContent { }
