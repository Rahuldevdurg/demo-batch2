import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProduct } from '../models/product.interface';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('http://testapi.techriff.in/api/open/product')
      .pipe(catchError(this.handleError));
  }

  getProduct(productId: number): Observable<IProduct> {
    return this.http
      .get<IProduct>(`http://testapi.techriff.in/api/open/product/${productId}`)
      .pipe(catchError(this.handleError));
  }

  deleteProduct(productName: string) {
    // this.allProducts = this.allProducts.filter(
    //   (x) => x.productName != productName
    // );
  }

  changeStatus(
    newStatus: 'activate' | 'deactivate',
    productId: number
  ): Observable<IProduct> {
    if (newStatus == 'activate')
      return this.http.post<IProduct>(
        `http://testapi.techriff.in/api/open/products/${productId}/reactivate`,
        null
      );
    else
      return this.http.post<IProduct>(
        `http://testapi.techriff.in/api/open/products/${productId}/deactivate`,
        null
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log('Logging from Error', error.message);
    return throwError('Sorry, An error occurred');
  }
}
