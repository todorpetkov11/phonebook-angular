import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/AuthService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private location: Location, private fb: FormBuilder, private authService: AuthService) { }

  back(): void {
    this.location.back()
  }

  public faBackward = faArrowLeft;

  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)],],
    // phone: ['', [Validators.minLength(10), Validators.maxLength(11), Validators.required],],
    email: ['', [Validators.required, Validators.email],],
    password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)],],
    rePassword: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)],],
  });

  onSubmit() {
    let data = {
      name: this.registerForm.get('name')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value
    }
    this.authService.register(data).subscribe();
  }

  get name() { return this.registerForm.get('name'); }
  // get phone() { return this.registerForm.get('phone'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get rePassword() { return this.registerForm.get('rePassword'); }
}
