import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShareModule } from '../share/share.module';
import { BlogMainRoutingModule } from './blog-main-routing.module';

import { BlogMainComponent } from './blog-main.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog-list/blog/blog.component';
import { BlogContent } from './blog-content/blog-content.component';

@NgModule({
  imports: [
    ShareModule,
    RouterModule,
    BlogMainRoutingModule
  ],
  exports: [ BlogMainComponent ],
  declarations: [ BlogMainComponent, BlogListComponent, BlogComponent, BlogContent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class BlogMainModule { }
