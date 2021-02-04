import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { FormsModule } from '@angular/forms';
import { IfNullOrEmptyPipe } from './pipes/if-null-or-empty.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { LowerCasePipe } from '@angular/common';
import { SearchProductPipe } from './pipes/search-product.pipe';
import { ParentComponent } from './parent-component/parent.component';
import { ChildComponent } from './child/child.component';
import { AccordianComponent } from './shared/accordian/accordian.component';
import { TimerComponent } from './timer/timer.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ProductModule } from './_products/product.module';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

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
    RouterModule.forRoot(routes),
    ProductModule,
  ],
  providers: [LowerCasePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
