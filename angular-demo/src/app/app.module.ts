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
import { ProductProfileGuard } from './_products/services/product-profile.guard';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ProductResolver } from './_products/services/product-profile.resolver';
import { AddProductComponent } from './_products/add-product/add-product.component';
import { ProductDetailsComponent } from './_products/product-details/product-details.component';
import { ProductListComponent } from './_products/product-list/product-list.component';
import { ProductOverviewComponent } from './_products/product-overview/product-overview.component';
import { ProductProfileComponent } from './_products/product-profile/product-profile.component';
import { ProductSpecificationComponent } from './_products/product-specification/product-specification.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'products/new',
    component: AddProductComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'products/:id',
    component: ProductProfileComponent,
    canActivate: [ProductProfileGuard], //true | Observable<true> | Promise<true>
    resolve: {
      productData: ProductResolver,
    },
    children: [
      { path: '', component: ProductOverviewComponent },
      { path: 'overview', component: ProductOverviewComponent },
      { path: 'spec', component: ProductSpecificationComponent },
    ],
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
    ProductListComponent,
    IfNullOrEmptyPipe,
    CustomDatePipe,
    SearchProductPipe,
    ProductDetailsComponent,
    ParentComponent,
    ChildComponent,
    AccordianComponent,
    TimerComponent,
    WelcomeComponent,
    ProductProfileComponent,
    AddProductComponent,
    NotFoundComponent,
    ProductOverviewComponent,
    ProductSpecificationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [LowerCasePipe, ProductProfileGuard, ProductResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
