//import lib
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ShareModule } from '../share/share.module';

//import components
import { HeaderComponent } from './blog-header/header.component';
import { OpeningCinematicComponent } from './blog-header/opening-cinematic/opening-cinematic.component';
import { NavComponent } from './blog-header/nav/nav.component';

//blog feature
import { BlogFeatureComponent } from './blog-feature/blog-feature.component';
import { BlogFilterComponent } from './blog-feature/blog-filter/blog-filter.component';
import { BlogSearchComponent } from './blog-feature/blog-filter/blog-search/blog-search.component';
import { BlogLabelComponent } from './blog-feature/blog-filter/blog-label/blog-label.component';

import { FooterComponent } from './blog-footer/footer.component';

import { SvgSpriteComponent } from './svg-sprite/svg-sprit.component';
//import components

//main code
@NgModule({
  imports: [
    ShareModule
  ],
  exports:
  [
    HeaderComponent,
    FooterComponent,
    BlogFeatureComponent,
    SvgSpriteComponent
  ],

  declarations:
  [
    HeaderComponent, OpeningCinematicComponent, NavComponent,
    BlogFeatureComponent, BlogFilterComponent, BlogSearchComponent, BlogLabelComponent,
    FooterComponent,
    SvgSpriteComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class CoreModule { }
