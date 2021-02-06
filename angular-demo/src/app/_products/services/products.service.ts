import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UtilityService } from 'src/app/services/utility.service';
import { IProduct } from '../../models/product.interface';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(
    private http: HttpClient,
    private utilitySevice: UtilityService
  ) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://testapi.techriff.in/api/products');
  }

  getProduct(productId: number): Observable<IProduct> {
    return this.http.get<IProduct>(
      `http://testapi.techriff.in/api/products/${productId}`
    );
  }

  deleteProduct(productName: string) {}

  changeStatus(
    newStatus: 'activate' | 'deactivate',
    productId: number
  ): Observable<IProduct> {
    if (newStatus == 'activate')
      return this.http.post<IProduct>(
        `http://testapi.techriff.in/api/products/${productId}/reactivate`,
        null
      );
    else
      return this.http.post<IProduct>(
        `http://testapi.techriff.in/api/products/${productId}/deactivate`,
        null
      );
  }
}
