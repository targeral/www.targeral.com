import { Component } from '@angular/core';

let template = require('./blog-filter.component.html');
let style = require('./blog-filter.component.scss');

@Component({
  selector: 'blog-filter',
  template: template,
  styles: [ style ],
})

export class BlogFilterComponent {
  labels: string[] = [];
  range: string;

  constructor() {
    this.labels = ['All', 'Front End', 'Back End'];
    this.range = 'All';
  }

  onSearch(content: Object) {
    console.log('search ', content);
  }

  onSelected(select: string) {
    this.range = select;
  }
}
