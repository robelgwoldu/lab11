import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-counterWithSetter',
  template: `<p><ng-content></ng-content></p> <p><button (click) = "decrease()"> - </button> {{counterValue}} <button (click) = "increase()"> + </button></p>`,
  styles: ['p { color: blue; font-size: 22px;}']
})
export class CounterWithSetterComponent implements OnInit {

  @Input() counterValue: number;
  @Output() messageEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  decrease() {
    this.counterValue--;
    this.counterChange();
  }

  increase() {
    this.counterValue++;
    this.counterChange();
  }

  counterChange() {
    this.messageEmitter.emit(this.counterValue);
  }
}
