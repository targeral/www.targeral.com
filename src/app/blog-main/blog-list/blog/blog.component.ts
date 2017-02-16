import { Component, Input, OnInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

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
  @Input() private counts: number;
  @Input() private isLast: boolean;
  constructor(private slimLoader: SlimLoadingBarService) {
  }

  ngOnInit() {
    this.slimLoader.progress = this.slimLoader.progress + (60 / this.counts);
    if(this.isLast) {
      this.slimLoader.complete();
    }
  }

  ngOnChanges() {
    console.log('change');
    console.log(this.blog)
  }
}
