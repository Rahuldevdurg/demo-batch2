import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WpHttpInterceptor implements HttpInterceptor {
  private _token = `0o1vMKTkvnsxcDjCZVWLIzVyNSOeuhIaFmSeoj5cdCAv1b7r6Wp6mPcGqaI1mtWXlaQF0A25TA_f_hvd9FYapf6Us8XDF4C2zOuoOK0iBBDJQ4R46w4GltKytEbcL1oomyeetZFkOvpOVRDVHof-6Fda55iQ8K0b2oll2QEhkeaoWfP-UfxkiMMQGYP1Gi8jCeVhMBKBJBdm7lJqH_r1_9JcoxKCgdnDQztuXyNqVS01GckirvqR1THRlPFF7zvP-PlgQACQNhTDoYfwSAKDXNwl6yv1KVdFMPBoS_RrPCDX18LFEMWd_APN4136Wfg4w_eG0vV2xJdBr5ksHimKauho9QYcopObuEryuWhOGyhRNr_Pwur1sUnSnqVMKNhIDGI3jouvYzNeJvmpBm4fMSClFyC3bMBmi0aOsmyCkfkGdqlUWE79j8RZvArj3H0mx97Hfv2R26D_I_-2AmpOCWUJUhmhoRIfUSbKq40tVpjjMK8s2TEur3XSeB8sU7Lo`;

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Inside Interceptor');

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this._token}`,
      },
    });

    return next.handle(req).pipe(
      retry(1),
      catchError(this.handleError),
      finalize(() => {
        console.log(
          'Log every HTTP Call',
          `URL - ${req.url}, METHOD - ${req.method}`
        );
      })
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log('Logging errors..', error);
    return throwError('an error occured.');
  }
}
