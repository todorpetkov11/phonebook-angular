import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private location: Location, private fb: FormBuilder) { }

  back(): void {
    this.location.back()
  }

  public faBackward = faArrowLeft;

  loginForm = this.fb.group({
    // email: ['', [Validators.required, Validators.email],],
    username: ['', [Validators.required],],
    password: ['', [Validators.required],],
  });

  onSubmit() {
    let a = this.loginForm.value
    console.log(a)
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  get username() { return this.loginForm.get('username'); }
}
