import { Injectable } from '@angular/core';

import { Blog } from './classes/blog';
import { BLOGS } from './mock-blogs';

console.log('this is service', BLOGS);

@Injectable()
export class BlogsService {
  getBlogs(): Promise<Blog[]> {
    return Promise.resolve(BLOGS);
  }
}
