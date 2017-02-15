import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogContent } from './blog-content/blog-content.component';

const blogMainRoutes: Routes = [
  { path: '', component: BlogListComponent },
  { path: 'blog-list', component: BlogListComponent },
  { path: 'blog/:id', component: BlogContent }
];

@NgModule({
  imports: [
    RouterModule.forChild(blogMainRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class BlogMainRoutingModule { }
