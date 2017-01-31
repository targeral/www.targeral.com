import { Component, EventEmitter, Output } from '@angular/core';

let template = require('./nav.component.html');
let style = require('./nav.component.scss');

@Component({
  selector: 'blog-nav',
  template: template,
  styles: [ style ],
})

export class NavComponent {
  constructor() {
    this.upOrdown = "<";
    this.goUp = true;
    this.liStatus = [true, false, false, false, false, false];
    this.currentLi = 1;
  }

  @Output() onOpen = new EventEmitter<boolean>();
  goUp: boolean;
  upOrdown: string;
  liStatus: boolean[];
  currentLi: number;

  clicked(ev: Event) {
    this.onOpen.emit(this.goUp);
    this.toggleIcon(this.goUp);
    this.changeState(this.goUp);
  }

  clickNav(id: number) {
    this.liStatus[this.currentLi -1] = false;
    this.liStatus[id -1] = true;
    this.currentLi = id;
  }

  toggleIcon(flag: boolean) {
    this.upOrdown = flag ? ">" : "<";
  }

  changeState(flag: boolean) {
    this.goUp = !flag;
  }
}
