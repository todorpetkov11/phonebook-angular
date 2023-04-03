import { Component, OnInit } from '@angular/core';
import { faPen, faRemove, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { contactService } from 'src/app/core/services/ContactService';
import IContact from 'src/app/core/interfaces/ContactInterface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  constructor(
    private location: Location,
    private contactService: contactService,
    private actRoute: ActivatedRoute,
    private router: Router) { }

  public paramId: string;
  public contact: IContact;
  public faBackward = faArrowLeft;
  public faPen = faPen;
  public faRemove = faRemove;

  ngOnInit(): void {
    this.actRoute.params.subscribe(parameter => {
      this.paramId = parameter['id']
    })

    this.contactService.getContactById(this.paramId).subscribe({
      next: (contact) => {
        this.contact = contact
      }
    })
  }

  back(): void {
    this.location.back()
  }

  public onDelete() {
    this.contactService.deleteContact(this.paramId).subscribe()
    this.router.navigate(['/contacts'])
  };

}
