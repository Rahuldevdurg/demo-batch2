import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { IProduct } from '../models/product.interface';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-parent-component',
  template: ` <h2 #header>Inside Parent Component</h2>
    <hr />
    {{ allProducts | json }}`,
})
export class ParentComponent implements OnInit {
  constructor(private productService: ProductsService) {}
  allProducts: IProduct[];

  ngOnInit() {
    this.allProducts = this.productService.getProducts();
  }

  logOnParent() {
    console.log('Logging from parent');
  }

  udpateTime() {
    console.log('Updating Time...');
  }
}
