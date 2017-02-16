import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

let appTpl = require('./app.component.html');
let appStyle = require('./app.component.scss');

@Component({
  selector: 'blog-app',
  template: appTpl,
  styles: [appStyle]
})

export class AppComponent {
  constructor(private slimLoader: SlimLoadingBarService) {
    this.slimLoader.start();
  }

}
