import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private location: Location, private fb: FormBuilder) { }

  back(): void {
    this.location.back()
  }

  public faBackward = faArrowLeft;

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)],],
    phone: ['', [Validators.minLength(10), Validators.maxLength(11), Validators.required],],
    email: ['', [Validators.required, Validators.email],],
    password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)],],
    rePassword: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)],],
    // fullAddress: this.fb.group({
    //   country: ['', [Validators.required],],
    //   city: ['', [Validators.required],],
    //   address: ['', [Validators.required],],
    //   zip: ['', [Validators.required, Validators.minLength(4)],]
    // }),
  });

  onSubmit() {
    let a = this.registerForm.value
    console.log(a)
  }

  get username() { return this.registerForm.get('username'); }
  get phone() { return this.registerForm.get('phone'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get rePassword() { return this.registerForm.get('rePassword'); }
  // get address() { return this.registerForm.get('fullAddress')?.get('address'); }
  // get zip() { return this.registerForm.get('fullAddress')?.get('zip'); }


}
