import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor() {}
  fullName: string;
  emailAddress: string;
  optForSpecialOffer: boolean;
  gender: string;
  country: string;

  ngOnInit(): void {}
  submitForm(form) {
    console.log('Submitting form', form);
  }
}
