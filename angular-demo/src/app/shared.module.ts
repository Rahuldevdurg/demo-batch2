import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { IfNullOrEmptyPipe } from './pipes/if-null-or-empty.pipe';
import { SearchProductPipe } from './pipes/search-product.pipe';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [IfNullOrEmptyPipe, CustomDatePipe, SearchProductPipe],
  declarations: [IfNullOrEmptyPipe, CustomDatePipe, SearchProductPipe],
  providers: [],
})
export class SharedModule {}
