import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { IProduct } from '../../models/product.interface';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getProducts(): Observable<IProduct[]> {
    let loggedinUser = this.authService.getLoggedInUserData();
    return this.http.get<IProduct[]>(
      'http://testapi.techriff.in/api/products',
      {
        headers: {
          Authorization: `Bearer ${loggedinUser.access_token}`,
        },
      }
    );
  }

  getProduct(productId: number): Observable<IProduct> {
    let loggedinUser = this.authService.getLoggedInUserData();

    return this.http.get<IProduct>(
      `http://testapi.techriff.in/api/products/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${loggedinUser.access_token}`,
        },
      }
    );
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
