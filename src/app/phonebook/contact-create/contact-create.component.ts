import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent {

  constructor(private location: Location, private fb: FormBuilder) { }

  back(): void {
    this.location.back()
  }

  public faBackward = faArrowLeft;

  createForm = this.fb.group({
    contactName: ['', [Validators.required, Validators.minLength(3)],],
    phone: ['', [Validators.minLength(10), Validators.maxLength(11), Validators.required],],
    email: ['', [Validators.required, Validators.email],],
    fullAddress: this.fb.group({
      country: ['', [Validators.required],],
      city: ['', [Validators.required],],
      address: ['', [Validators.required],],
      zip: ['', [Validators.required, Validators.minLength(4)],]
    }),
  });

  onSubmit() {
    let a = this.createForm.value
    console.log(a)
  }

  get contactName() { return this.createForm.get('contactName'); }
  get phone() { return this.createForm.get('phone'); }
  get email() { return this.createForm.get('email'); }
  get country() { return this.createForm.get('fullAddress')?.get('country'); }
  get city() { return this.createForm.get('fullAddress')?.get('city'); }
  get address() { return this.createForm.get('fullAddress')?.get('address'); }
  get zip() { return this.createForm.get('fullAddress')?.get('zip'); }


}
