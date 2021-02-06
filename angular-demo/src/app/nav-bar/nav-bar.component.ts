import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { IUserToken } from '../models/user-token.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  loggedInUser: IUserToken;
  constructor(private authService: AuthService) {}
  // ngAfterViewChecked(): void {
  //   this.loggedInUser = this.authService.getLoggedInUserData();
  // }

  ngOnInit(): void {
    console.log('Inside Nav Bar');
  }

  logOut() {
    this.authService.logOut();
  }
}
