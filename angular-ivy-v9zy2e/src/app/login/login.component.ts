import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  isLoginFailed: boolean = false;
  emptyUserName = 'You must enter a username';
  minlengthUserName = 'User name must be at least 3 characters long';
  maxlengthUserName = 'Username cannot exceed 20 characters';
  unamePattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]+)$";
  userNamePattern = 'Username should be in alphanumeric only';
  emptyPassword = 'You must enter a password';
  minlengthPassword = 'Password must be at least 8 characters long';
  maxlengthPassword = 'Password cannot exceed 20 characters';
  passwordPattern = 'Pattern does not match';
  wrongCredentials = 'Incorrect Username or Password';
  constructor() {
  }

ngOnInit() {
  this.loginForm = new FormGroup({
    userName: new FormControl('',[
      Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern(this.unamePattern)]),
    password: new FormControl('',[
      Validators.required,Validators.minLength(8),Validators.maxLength(20),Validators.pattern(this.unamePattern)])
  });
}
doLogin() {
//uname aA3
//password  aAsSdD@123
  // call authenticateUser method to perform login operation
  // if success, redirect to profile page
  // else display appropriate error message
     // reset the form
//this.route.navigate(['profile'])
}
get userName() {
  return this.loginForm.controls['userName'];
}
get password(){
  return this.loginForm.controls['password'];
}
}
  

