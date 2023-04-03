import { Component, OnInit } from '@angular/core';
import { faAdd, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { pipe, tap } from 'rxjs';
import { contactService } from 'src/app/core/services/ContactService';
import IContact from 'src/app/core/interfaces/ContactInterface';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {


  constructor(private location: Location, private contactService: contactService) { }

  public contacts: IContact[]

  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe(
      {
        next: (contacts) => {
          this.contacts = contacts
        }
      }
    )
  }

  back(): void {
    this.location.back()
  }

  public faAdd = faAdd;
  public faBackward = faArrowLeft;


}
