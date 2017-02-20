import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//import component
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//import module
import { CoreModule } from './core/core.module';
import { BlogMainModule } from './blog-main/blog-main.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';


@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    BlogMainModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
    SlimLoadingBarModule.forRoot()
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
