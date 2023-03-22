import { Component } from '@angular/core';
import { faAdd, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {

  constructor(private location: Location) { }

  back(): void {
    this.location.back()
  }

  public faAdd = faAdd;
  public faBackward = faArrowLeft;

}
