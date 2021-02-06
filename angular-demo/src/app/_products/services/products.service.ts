import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UtilityService } from 'src/app/services/utility.service';
import { IProduct } from '../../models/product.interface';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private _token = `0o1vMKTkvnsxcDjCZVWLIzVyNSOeuhIaFmSeoj5cdCAv1b7r6Wp6mPcGqaI1mtWXlaQF0A25TA_f_hvd9FYapf6Us8XDF4C2zOuoOK0iBBDJQ4R46w4GltKytEbcL1oomyeetZFkOvpOVRDVHof-6Fda55iQ8K0b2oll2QEhkeaoWfP-UfxkiMMQGYP1Gi8jCeVhMBKBJBdm7lJqH_r1_9JcoxKCgdnDQztuXyNqVS01GckirvqR1THRlPFF7zvP-PlgQACQNhTDoYfwSAKDXNwl6yv1KVdFMPBoS_RrPCDX18LFEMWd_APN4136Wfg4w_eG0vV2xJdBr5ksHimKauho9QYcopObuEryuWhOGyhRNr_Pwur1sUnSnqVMKNhIDGI3jouvYzNeJvmpBm4fMSClFyC3bMBmi0aOsmyCkfkGdqlUWE79j8RZvArj3H0mx97Hfv2R26D_I_-2AmpOCWUJUhmhoRIfUSbKq40tVpjjMK8s2TEur3XSeB8sU7Lo`;

  constructor(
    private http: HttpClient,
    private utilitySevice: UtilityService
  ) {}

  getProducts(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('http://testapi.techriff.in/api/products', {
        headers: {
          Authorization: `Bearer ${this._token}`,
        },
      })
      .pipe(catchError(this.handleError));
  }

  getProduct(productId: number): Observable<IProduct> {
    return this.http
      .get<IProduct>(`http://testapi.techriff.in/api/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${this._token}`,
        },
      })
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
      return this.http
        .post<IProduct>(
          `http://testapi.techriff.in/api/products/${productId}/reactivate`,
          null
        )
        .pipe(catchError(this.handleError));
    else
      return this.http
        .post<IProduct>(
          `http://testapi.techriff.in/api/products/${productId}/deactivate`,
          null
        )
        .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log('Logging errors..', error);
    return throwError('an error occured.');
  }
}
