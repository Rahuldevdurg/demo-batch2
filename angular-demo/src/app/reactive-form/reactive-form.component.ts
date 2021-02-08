import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  customerForm: FormGroup;

  ngOnInit(): void {
    // this.customerForm = new FormGroup({
    //   fullName: new FormControl('Swagat Swain'),
    //   emailAddress: new FormControl(),
    // });

    this.customerForm = this.fb.group({
      fullName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
    });
  }

  registerUser() {
    console.log('Submitting Form ', this.customerForm);
  }

  loadData() {
    // this.customerForm.setValue({
    //   fullName: 'Test Name',
    //   emailAddress: 'email@gmail.com',
    // });

    this.customerForm.patchValue({
      fullName: 'Test Name',
    });
  }
}
