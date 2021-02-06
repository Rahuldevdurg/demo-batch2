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
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class WpHttpInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Inside Interceptor');
    let userData = this.auth.getLoggedInUser();
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${userData?.accessToken}`,
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
