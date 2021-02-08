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

function matchValidator(
  group: AbstractControl
): {
  [key: string]: boolean;
} | null {
  let email = group.get('emailAddress');
  let confirmEmail = group.get('confirmEmailAddress');
  console.log(email, confirmEmail);
  if (email.value !== confirmEmail.value) {
    return { match: true };
  }
  return null;
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
      emailGroup: this.fb.group(
        {
          emailAddress: ['', [Validators.required, Validators.email]],
          confirmEmailAddress: [''],
        },
        { validators: matchValidator }
      ),
      rating: ['', [Validators.required, rangeValidator(1, 15)]],
      phoneNumber: [''],
      subscribeType: ['email'],
      contactMe: [true],
      addressArray: this.fb.array([this.createAddressGroup()]),
    });

    this.customerForm.get('subscribeType').valueChanges.subscribe((data) => {
      console.log('Inside Value Change -', data);
      this.updateNotification(data);
    });

    this.customerForm.get('phoneNumber').statusChanges.subscribe((data) => {
      console.log('Inside statusChanges -', data);
      console.log('Inside statusChanges 2 -', data);
    });
  }

  addNewAddress() {
    this.customerForm
      .get('addressArray')
      ['controls']?.push(this.createAddressGroup());
  }
  createAddressGroup() {
    return this.fb.group({
      address1: [''],
      csz: [''],
    });
  }

  registerUser() {
    console.log('Submitting Form ', this.customerForm);
  }

  updateNotification(notificationType: string) {
    let control = this.customerForm.get('phoneNumber');
    if (notificationType === 'phone') {
      control.setValidators(Validators.required);
    } else {
      control.clearValidators();
    }
    control.updateValueAndValidity();
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
