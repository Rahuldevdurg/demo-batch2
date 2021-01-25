import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor() {}
  title: string = 'Product List';
  product: IProduct = {
    productName: 'Hero Honda Splendor',
    description: 'Most popular Indian Bike',
    releaseDate: '10-12-1990',
    price: 200,
    isActive: true,
    imageUrl: 'https://via.placeholder.com/250?text=splendor',
  };

  ngOnInit(): void {}
}
