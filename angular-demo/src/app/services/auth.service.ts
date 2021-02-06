import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUserToken } from '../models/user-token.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  getLoggedInUser(): IUserToken {
    if (window.localStorage.getItem('_userData'))
      return JSON.parse(window.localStorage.getItem('_userData')) as IUserToken;
    else null;
  }

  loginUser(email: string, password: string): Observable<IUserToken> {
    let body = `userName=${email}&password=${password}&grant_type=password`;
    return this.http.post(`http://testapi.techriff.in/Token`, body).pipe(
      map(
        (data: any) =>
          ({
            userName: data.userName,
            accessToken: data.access_token,
          } as IUserToken)
      )
    );
  }

  storeUserData(data: IUserToken) {
    window.localStorage.setItem('_userData', JSON.stringify(data));
  }
  logOutUser() {
    window.localStorage.clear();
  }
}
