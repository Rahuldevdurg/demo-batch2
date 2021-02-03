import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.interface';
import { ProductService } from '../services/products.service';
import { UtilityService } from '../services/utility.service';

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
    private productService: ProductService,
    private utilityService: UtilityService
  ) {}

  refreshData() {
    console.log('Refreshing !!');
  }
  ngOnInit(): void {
    this.loadInitialData();
  }

  private loadInitialData() {
    this.productService.getProducts().subscribe((data: IProduct[]) => {
      console.log('Data from Subscription ', data);
      this.products = data;
    });
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
    //Show an alert to the user.
    this.utilityService.showError(`${productName} is deleted.`);
    this.refreshData();
  }
  onStatusChangeOfProduct(productId: number) {
    this.utilityService.showSuccess(`Product Status Changed !`);
    this.loadInitialData();
  }
}
