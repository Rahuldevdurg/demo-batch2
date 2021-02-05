import { NgModule } from '@angular/core';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { IfNullOrEmptyPipe } from './pipes/if-null-or-empty.pipe';
import { SearchProductPipe } from './pipes/search-product.pipe';

@NgModule({
  imports: [],
  exports: [IfNullOrEmptyPipe, SearchProductPipe, CustomDatePipe],
  declarations: [IfNullOrEmptyPipe, SearchProductPipe, CustomDatePipe],
  providers: [],
})
export class SharedModule {}
