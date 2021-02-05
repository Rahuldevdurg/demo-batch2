import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { LowerCasePipe } from '@angular/common';
import { ParentComponent } from './parent-component/parent.component';
import { ChildComponent } from './child/child.component';
import { AccordianComponent } from './shared/accordian/accordian.component';
import { TimerComponent } from './timer/timer.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ProductsModule } from './_products/products.module';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './_users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TestComponentComponent,
    ParentComponent,
    ChildComponent,
    AccordianComponent,
    TimerComponent,
    WelcomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    // ProductsModule,
    //UsersModule,
    AppRoutingModule,
  ],
  providers: [LowerCasePipe],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
