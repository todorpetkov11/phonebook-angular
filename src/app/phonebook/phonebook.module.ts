import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsListItemComponent } from './contacts-list-item/contacts-list-item.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { RouterModule } from '@angular/router';
import { PhonebookRoutingModule } from './phonebook-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ContactsListComponent,
    ContactsListItemComponent,
    ContactDetailsComponent,
    ContactCreateComponent,
    ContactEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PhonebookRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports: [
    ContactsListComponent
  ]
})
export class PhonebookModule { }
