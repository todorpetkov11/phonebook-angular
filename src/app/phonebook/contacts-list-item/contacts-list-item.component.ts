import { Component, Input } from '@angular/core';
import IContact from 'src/app/core/interfaces/ContactInterface';

@Component({
  selector: 'app-contacts-list-item',
  templateUrl: './contacts-list-item.component.html',
  styleUrls: ['./contacts-list-item.component.css']
})
export class ContactsListItemComponent {

  constructor() { }

  @Input() contact: IContact;

}
