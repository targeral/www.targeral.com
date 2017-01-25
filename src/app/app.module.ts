import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import module
import { CoreModule } from './core/core.module';
import { BlogMainModule } from './blog-main/blog-main.module';

//import component
import { AppComponent } from './app.component';



@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    BlogMainModule,
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
