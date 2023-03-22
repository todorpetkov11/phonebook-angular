import { Component } from '@angular/core';
import { faMessage, faPhone, faEnvelope, faPen, faRemove, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {
  constructor(private location: Location) { }

  back(): void {
    this.location.back()
  }

  public faBackward = faArrowLeft;
  public faPen = faPen;
  public faEnvelope = faEnvelope;
  public faPhone = faPhone;
  public faMessage = faMessage;
  public faRemove = faRemove;
  
}
