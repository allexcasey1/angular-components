import { Component } from '@angular/core';
import { AbstractControlDirective, FormBuilder} from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { SignupValidators } from '../common/signup.validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  constructor(private fb: FormBuilder) { }
  form: FormGroup = this.fb.group({
    oldPassword: ['', Validators.required, SignupValidators.incorrect],
    newPassword: ['', Validators.required],
    confirmPassword: ['', Validators.required]}, 
    { validator: SignupValidators.passwordsMatch }
    );   

    get oldPassword() {
      return this.form.get('oldPassword');
    }
    get newPassword() {
      return this.form.get('newPassword');
    }
    get confirmPassword() {
      return this.form.get('confirmPassword');
    }
    get errors() {
      return this.form.errors;
    }
}



