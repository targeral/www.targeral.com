import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

let template = require('./blog-search.component.html');
let style = require('./blog-search.component.scss');

@Component({
  selector: 'blog-search',
  template: template,
  styles: [ style ],
})

export class BlogSearchComponent {
  @Input() range: string;
  @Output() onSearch = new EventEmitter<Object>();

  private searchContent: string;

  constructor() {}

  searchStart() {
    console.log('start search...', this.searchContent);
    this.onSearch.emit({range: this.range, content: this.searchContent});
  }
}
