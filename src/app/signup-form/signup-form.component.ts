import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ControlContainer, FormGroupName } from '@angular/forms';
import { SignupValidators } from '../common/signup.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form : FormGroup;

  constructor(fb : FormBuilder) {
    this.form = fb.group({
      username: ['', Validators.required, SignupValidators.notUnique],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]}, 
    {
      validator: SignupValidators.passwordsMatch,
      asyncValidator: '',
      update: ''
    });    
  }
  get username() {
    return this.form.get('username')
  }
  get password() {
    return this.form.get('password')
  }
  get confirmPassword() {
    return this.form.get('confirmPassword')
  }
  signUp() {
    console.log(this.form.value) 
  }
}
