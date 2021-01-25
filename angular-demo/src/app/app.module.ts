import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, TestComponentComponent, ProductListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [ProductListComponent],
})
export class AppModule {}
