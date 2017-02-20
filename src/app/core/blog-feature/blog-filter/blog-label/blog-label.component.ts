import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

let template = require('./blog-label.component.html');
let style = require('./blog-label.component.scss');

@Component({
  selector: 'blog-label',
  template: template,
  styles: [ style ],
})

export class BlogLabelComponent {
  @Input() private label: string;
  @Input() private selected: string;
  @Output() private onSelected = new EventEmitter<string>();

  select() {
    this.onSelected.emit(this.label);
  }

  setClasses(selected: string) {
    let isSelected = selected === this.label;
    return {
      selected: isSelected
    };
  }
}
