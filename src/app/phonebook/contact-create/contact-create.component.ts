import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { contactService } from 'src/app/core/services/ContactService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent {

  constructor(private location: Location,
    private fb: FormBuilder,
    private contactService: contactService,
    private router: Router) { }

  public faBackward = faArrowLeft;
  fileName: string = 'You haven\'t selected a file yet.';

  onSubmit(event: Event) {
    event.preventDefault();
    if (!this.createForm.valid) return;
    let data = this.createForm.value;
    this.contactService.createContact(data).subscribe()
    this.router.navigate(['/contacts'])
  }

  back(): void {
    this.location.back()
  }

  createForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)],],
    number: ['', [Validators.minLength(10), Validators.maxLength(11), Validators.required],],
    // email: ['', [Validators.required, Validators.email],],
    group: ['', Validators.required],
    image: new FormControl(),
    country: ['', [Validators.required],],
    city: ['', [Validators.required],],
    address: ['', [Validators.required],],
    zip: ['', [Validators.required, Validators.minLength(4)],]
  });

  get name() { return this.createForm.get('name'); }
  get number() { return this.createForm.get('number'); }
  // get email() { return this.createForm.get('email'); }
  get group() { return this.createForm.get('email'); }
  get country() { return this.createForm.get('country'); }
  get city() { return this.createForm.get('city'); }
  get address() { return this.createForm.get('address'); }
  get zip() { return this.createForm.get('zip'); }

  onFileSelected(event: any) {
    event.preventDefault();
    const file: File = event.target.files[0];
    if (file) {
      console.log(file)
      this.fileName = file.name;
      this.createForm.patchValue(file)
    }
  }
}
