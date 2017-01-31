import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ShareModule } from '../share/share.module';

import { BlogListComponent } from './blog-list.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  imports: [
    ShareModule
  ],
  declarations: [ BlogListComponent, BlogComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class BlogListModule { }
