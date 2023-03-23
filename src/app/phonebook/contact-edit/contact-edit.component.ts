import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent {

  constructor(private location: Location, private fb: FormBuilder) { }

  back(): void {
    this.location.back()
  }

  public faBackward = faArrowLeft;

  editForm = this.fb.group({
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
    let a = this.editForm.value
    console.log(a)
  }

  get contactName() { return this.editForm.get('contactName'); }
  get phone() { return this.editForm.get('phone'); }
  get email() { return this.editForm.get('email'); }
  get country() { return this.editForm.get('fullAddress')?.get('country'); }
  get city() { return this.editForm.get('fullAddress')?.get('city'); }
  get address() { return this.editForm.get('fullAddress')?.get('address'); }
  get zip() { return this.editForm.get('fullAddress')?.get('zip'); }


}
