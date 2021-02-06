import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserToken } from '../models/user-token.interface';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  logInUser(email, password) {
    console.log(email.value, password.value);
    this.authService
      .loginUser(email.value, password.value)
      .subscribe((data: IUserToken) => {
        console.log('User Data', data);
        this.authService.storeUserData(data);
        this.router.navigate(['/products']);
      });
  }
}
