//import lib
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';

//import components
import { HeaderComponent } from './header/header.component';
import { OpeningCinematicComponent } from './header/opening-cinematic/opening-cinematic.component';
import { NavComponent } from './header/nav/nav.component';
import { BlogFeatureComponent } from './blog-feature/blog-feature.component';
import { FooterComponent } from './footer/footer.component';
import { SvgSpriteComponent } from './svg-sprite/svg-sprit.component';

//main code
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ HeaderComponent, SvgSpriteComponent, FooterComponent, BlogFeatureComponent ],

  declarations: [ HeaderComponent, OpeningCinematicComponent, NavComponent, SvgSpriteComponent, FooterComponent, BlogFeatureComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class CoreModule { }
