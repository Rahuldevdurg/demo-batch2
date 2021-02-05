import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUserToken } from '../models/user-token.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _userTokenId: string = 'userTokenId';
  constructor(private http: HttpClient) {}

  getLoggedInUserData(): IUserToken {
    //Get it from the local storage.
    if (window.localStorage.getItem(this._userTokenId)) {
      return JSON.parse(
        window.localStorage.getItem(this._userTokenId)
      ) as IUserToken;
    }
    return null;
  }
  getUserToken(userName: string, password: string): Observable<IUserToken> {
    let reqBody = `userName=${userName}&password=${password}&grant_type=password`;
    return this.http.post(`http://testapi.techriff.in/Token`, reqBody).pipe(
      map(
        (data: any) =>
          ({
            userName: data.userName,
            access_token: data.access_token,
          } as IUserToken)
      )
    );
  }

  logIn(userData: IUserToken) {
    window.localStorage.setItem(this._userTokenId, JSON.stringify(userData));
  }
  logOut() {
    window.localStorage.clear();
  }
}
