import { Component, OnInit } from '@angular/core';
import { IUserToken } from '../models/user-token.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  loggedInUser: IUserToken;
  constructor() {}

  ngOnInit(): void {
    console.log('Inside Nav Bar');
  }
}
