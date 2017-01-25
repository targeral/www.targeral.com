import { Component } from '@angular/core';

let template = require('./svg-sprite.component.html')
let style = require('./svg-sprite.component.scss')

@Component({
  selector: 'svg-sprite',
  template: template,
  styles: [ style ],
})

export class SvgSpriteComponent { }
