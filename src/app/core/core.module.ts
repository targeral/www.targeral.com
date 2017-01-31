//import lib
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ShareModule } from '../share/share.module';
//import lib

//import components
import { HeaderComponent } from './blog-header/header.component';
import { OpeningCinematicComponent } from './blog-header/opening-cinematic/opening-cinematic.component';
import { NavComponent } from './blog-header/nav/nav.component';

import { BlogMainComponent } from './blog-main/blog-main.component';

import { BlogFeatureComponent } from './blog-feature/blog-feature.component';

import { FooterComponent } from './blog-footer/footer.component';

import { SvgSpriteComponent } from './svg-sprite/svg-sprit.component';
//import components

//main code
@NgModule({
  imports: [
    ShareModule
  ],
  exports: [ HeaderComponent, BlogMainComponent, FooterComponent, BlogFeatureComponent, SvgSpriteComponent ],

  declarations: [ HeaderComponent, OpeningCinematicComponent, NavComponent, BlogMainComponent, BlogFeatureComponent, FooterComponent, SvgSpriteComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class CoreModule { }
