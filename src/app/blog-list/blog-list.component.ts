import { Component, OnInit } from '@angular/core';

import { Blog } from './classes/blog';

import { BlogsService } from './blogs.service';

let template = require('./blog-list.component.html');
let style = require('./blog-list.component.scss');

@Component({
  selector: 'blog-list',
  template: template,
  styles: [ style ],
  providers: [ BlogsService ],
})

export class BlogListComponent implements OnInit {
  blogs: Blog[];

  constructor(private blogsService: BlogsService) { }

  getBlogList(): void {
    this.blogsService.getBlogs().then(blogs => this.blogs = blogs);
  }

  ngOnInit(): void {
    this.getBlogList();
  }
}
