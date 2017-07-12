import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { CounterWithSetterComponent } from './counter-with-setter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterWithSetterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
