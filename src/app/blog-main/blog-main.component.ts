import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

let template = require('./blog-main.component.html');
let style = require('./blog-main.component.scss');

@Component({
  selector: 'blog-main',
  template: template,
  styles: [ style ],
})

export class BlogMainComponent { }
