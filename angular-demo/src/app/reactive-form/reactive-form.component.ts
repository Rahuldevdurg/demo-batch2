import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

// function customMaxValidator(
//   control: AbstractControl
// ): {
//   [key: string]: boolean;
// } | null {
//   if (control === null || control.value === '') return null;

//   if (
//     control != null &&
//     (isNaN(control.value) || control.value > 5 || control.value < 1)
//   ) {
//     return { range: true };
//   }
//   return null;
// }

function rangeValidator(min: number, max: number): ValidatorFn {
  return function (
    control: AbstractControl
  ): {
    [key: string]: boolean;
  } | null {
    if (control === null || control.value === '') return null;

    if (
      control != null &&
      (isNaN(control.value) || control.value > max || control.value < min)
    ) {
      return { range: true };
    }
    return null;
  };
}

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
      rating: ['', [Validators.required, rangeValidator(1, 15)]],
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
