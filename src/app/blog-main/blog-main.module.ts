import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';

import { BlogMainComponent } from './blog-main.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog-list/blog/blog.component';

@NgModule({
  imports: [
    ShareModule
  ],
  exports: [ BlogMainComponent ],
  declarations: [  BlogMainComponent, BlogListComponent, BlogComponent ]
})

export class BlogMainModule { }

