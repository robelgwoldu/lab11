import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public counterValue = 11;
  title = 'app';

  currentValue = this.counterValue;

  getCurrentValue(value) {
    this.currentValue = value;
  }

}
