import { Component, OnInit } from '@angular/core';
import { IRegister } from '../models/register.interface';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // fullName: string = 'Rahul Roy';
  // emailAddress: string = 'abc@gmail.com';
  showErrors: boolean = false;
  userData: IRegister = {
    fullName: '',
    emailAddress: '',
  };

  originalData = { ...this.userData };

  constructor() {}

  ngOnInit(): void {}
  submitForm(form) {
    console.log('Submitting form ', form);
  }

  resetForm() {
    console.log('Resetting Form');
    this.userData = { ...this.originalData };
  }
  logMessage() {
    console.log('Logging..');
  }
}
