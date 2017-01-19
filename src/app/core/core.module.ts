//import lib
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

//import components
import { OpeningCinematicComponent } from './opening-cinematic/opening-cinematic.component';

//main code
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ OpeningCinematicComponent ],
  declarations: [ OpeningCinematicComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class CoreModule { }
