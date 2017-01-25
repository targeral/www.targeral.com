import { Component, Input, OnInit } from '@angular/core';

import { Blog } from '../classes/blog';
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
  private b: BlogView;

  ngOnInit() {
    console.log('init');
  }

  ngOnChanges() {
    console.log('change');
    this.b = new BlogView(this.blog.title, {author: this.blog.author, date: this.blog.date, comment: this.blog.comment}, this.blog.label, this.blog.content);
  }
}
