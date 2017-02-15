import { Component, Input, OnInit } from '@angular/core';

import { Blog } from '../classes/blog';
import { Label } from '../classes/label';
import { BlogView } from '../classes/blogview';

let template = require('./blog.component.html');
let style = require('./blog.component.scss');

@Component({
  selector: 'blog',
  template: template,
  styles: [ style ],
})

export class BlogComponent implements OnInit{
  @Input() private blog: Blog;

  ngOnInit() {
    console.log('init');  }

  ngOnChanges() {
    console.log('change');
    console.log(this.blog)
  }
}
