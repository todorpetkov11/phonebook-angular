import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { contactService } from 'src/app/core/services/ContactService';
import { ActivatedRoute, Router } from '@angular/router';
import IContact from 'src/app/core/interfaces/ContactInterface';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private contactService: contactService,
    private actRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(parameter => {
      this.paramId = parameter['id']
    })

    this.contactService.getContactById(this.paramId).subscribe({
      next: (contact: IContact) => {
        this.contact = contact
        this.editForm.setValue(contact)
      }
    })
  }

  public faBackward = faArrowLeft;
  public paramId: string;
  public contact: IContact;

  editForm = this.fb.group({
    id: '',
    created_at: '',
    updated_at: '',
    user_id: '',
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

  onSubmit() {
    let data = this.editForm.value
    this.contactService.editContact(data, this.contact.id).subscribe();
    this.router.navigate(['/contacts']);
  }

  back(): void {
    this.location.back()
  }

  get name() { return this.editForm.get('name'); }
  get number() { return this.editForm.get('number'); }
  get group() { return this.editForm.get('group'); }
  get email() { return this.editForm.get('email'); }
  get country() { return this.editForm.get('country'); }
  get city() { return this.editForm.get('city'); }
  get address() { return this.editForm.get('address'); }
  get zip() { return this.editForm.get('zip'); }


}
