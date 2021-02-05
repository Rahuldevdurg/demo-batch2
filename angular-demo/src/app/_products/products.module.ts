import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomDatePipe } from '../pipes/custom-date.pipe';
import { IfNullOrEmptyPipe } from '../pipes/if-null-or-empty.pipe';
import { SearchProductPipe } from '../pipes/search-product.pipe';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductProfileComponent } from './product-profile/product-profile.component';
import { ProductSpecComponent } from './product-spec/product-spec.component';
import { ProductProfileGuard } from './services/product-profile.guard';
import { ProductResolver } from './services/product-profile.resolver';
import { ProductService } from './services/products.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
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
          { path: 'spec', component: ProductSpecComponent },
        ],
      },
    ]),
  ],
  exports: [],
  declarations: [
    AddProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductProfileComponent,
    ProductOverviewComponent,
    ProductSpecComponent,
    IfNullOrEmptyPipe,
    SearchProductPipe,
    CustomDatePipe,
  ],
  providers: [ProductProfileGuard, ProductResolver, ProductService],
})
export class ProductsModule {}
