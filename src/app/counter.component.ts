import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<p><ng-content></ng-content></p>
        <p><button (click) = "decrease()"> - </button> {{ counterValue }} <button (click) = "increase()"> + </button></p>`,
   styles: ['p { color: red; font-size: 22px;}']
})
export class CounterComponent implements OnInit {

  private counterValue = 0;

  constructor() { }

  ngOnInit() {

  }

  decrease() {
    this.counterValue--;
  }

  increase() {
    this.counterValue++;
  }

}
