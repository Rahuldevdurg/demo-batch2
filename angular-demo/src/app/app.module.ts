import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { IfNullOrEmptyPipe } from './pipes/if-null-or-empty.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { LowerCasePipe } from '@angular/common';
import { SearchProductPipe } from './pipes/search-product.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ParentComponent } from './parent-component/parent.component';
import { ChildComponent } from './child/child.component';
import { AccordianComponent } from './shared/accordian/accordian.component';
import { TimerComponent } from './timer/timer.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TestComponentComponent,
    ProductListComponent,
    IfNullOrEmptyPipe,
    CustomDatePipe,
    SearchProductPipe,
    ProductDetailsComponent,
    ParentComponent,
    ChildComponent,
    AccordianComponent,
    TimerComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [LowerCasePipe],
  bootstrap: [ProductListComponent],
})
export class AppModule {}
