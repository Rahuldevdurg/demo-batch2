import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { IfNullOrEmptyPipe } from './pipes/if-null-or-empty.pipe';
import { SearchProductPipe } from './pipes/search-product.pipe';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [
    IfNullOrEmptyPipe,
    SearchProductPipe,
    CustomDatePipe,
    CommonModule,
    FormsModule,
  ],
  declarations: [IfNullOrEmptyPipe, SearchProductPipe, CustomDatePipe],
  providers: [],
})
export class SharedModule {}
