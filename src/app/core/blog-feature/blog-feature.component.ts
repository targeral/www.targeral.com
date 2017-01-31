import { Component } from '@angular/core';

let template = require('./blog-feature.component.html');
let style = require('./blog-feature.component.scss');

@Component({
  selector: 'blog-feature',
  template: template,
  styles: [ style ],
})

export class BlogFeatureComponent { }
