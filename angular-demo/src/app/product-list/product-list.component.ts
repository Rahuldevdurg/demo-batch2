import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.interface';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  title: string = 'Product List';
  products: IProduct[];
  allProducts: IProduct[];
  showImages: boolean = false;
  searchText: string = '';
  renderTestComponnet: boolean = true;

  constructor(
    private lowerCasePipe: LowerCasePipe,
    private productService: ProductService
  ) {}

  refreshData() {
    console.log('Refreshing !!');
    this.products = this.productService.getProducts();
  }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  trackByName(index: number, product: IProduct) {
    return product.productName;
  }

  toggleImage() {
    this.showImages = !this.showImages;
  }
  changeName() {
    this.products[0].productName = 'Nexon';
  }
  // filterData() {
  //   console.log('Filtering !', this.searchText);
  //   this.products = this.allProducts.filter((item) =>
  //     item.productName
  //       .toLowerCase()
  //       .includes(this.lowerCasePipe.transform(this.searchText))
  //   );
  // }

  removeProductFromArray(productName: string) {
    //Remove the product from array.
    this.productService.deleteProduct(productName);
    this.refreshData();
  }
}
