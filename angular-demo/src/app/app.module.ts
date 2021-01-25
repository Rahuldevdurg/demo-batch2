import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, TestComponentComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [HelloComponent],
})
export class AppModule {}
