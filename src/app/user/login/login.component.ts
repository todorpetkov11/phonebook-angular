import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private location: Location, private fb: FormBuilder, private authService: AuthService) { }

  back(): void {
    this.location.back()
  }

  public faBackward = faArrowLeft;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email],],
    password: ['', [Validators.required],],
  });

  onSubmit() {
    let data = this.loginForm.value;
    this.authService.login(data).subscribe();
  };

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}
