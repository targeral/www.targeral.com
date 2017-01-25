import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogMainComponent } from './blog-main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ BlogMainComponent ],
  declarations: [  BlogMainComponent ]
})

export class BlogMainModule { }

