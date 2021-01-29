import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../models/product.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: IProduct;
  @Input() isShowImage: boolean;

  counter: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.counter++;
  }

  getClassesForProduct(product: IProduct) {
    if (product.price == 200) {
      return {
        green: true,
        bold: true,
      };
    } else {
      return {};
    }
  }

  buyProduct(product: IProduct) {
    console.log('Buying initiated for ' + product.productName);
  }
}
