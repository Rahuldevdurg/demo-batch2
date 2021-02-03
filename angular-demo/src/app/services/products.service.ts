import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.interface';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private allProducts: IProduct[] = [
    {
      productName: 'Hero Honda CD 100',
      description: 'Most popular Bike of India',
      releaseDate: '10-08-1990',
      price: 100.898,
      isActive: true,
      imageUrl: 'https://via.placeholder.com/150?text=CD100SS',
    },
    {
      productName: 'Honda Hornet',
      description: 'A sports Bike',
      releaseDate: '10-08-2010',
      price: 200,
      isActive: true,
      imageUrl: 'https://via.placeholder.com/150?text=Hornet',
    },
    {
      productName: 'Super splendor',
      description: '',
      releaseDate: null,
      price: 0.78,
      isActive: true,

      imageUrl: 'https://via.placeholder.com/150?text=Splendor',
    },
    {
      productName: 'Yamaha RX 100',
      description: null,
      releaseDate: '10-08-1987',
      price: 122,
      isActive: false,
      imageUrl: 'https://via.placeholder.com/150?text=RX100',
    },
  ];

  constructor() {}

  getProducts(): IProduct[] {
    return this.allProducts;
  }
  deleteProduct(productName: string) {
    this.allProducts = this.allProducts.filter(
      (x) => x.productName != productName
    );
  }
}
