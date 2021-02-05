import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserToken } from '../models/user-token.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  signIn(userName, password) {
    console.log(userName.value, password.value);
    this.authService.getUserToken(userName.value, password.value).subscribe(
      (data: IUserToken) => {
        this.authService.logIn(data);
        this.router.navigate(['/products']);
      },
      (error) => {
        console.log('Login Failed !', error);
      }
    );
  }
}
