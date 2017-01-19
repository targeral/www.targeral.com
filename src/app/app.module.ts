import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import module
import { CoreModule } from './core/core.module';

//import component
import { AppComponent } from './app.component';



@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
