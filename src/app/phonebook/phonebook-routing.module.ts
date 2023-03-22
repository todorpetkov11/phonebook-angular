import { RouterModule, Routes } from '@angular/router';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

const routes: Routes = [
    { path: 'contacts/', component: ContactsListComponent, },
    { path: 'contacts/details/:id', component: ContactDetailsComponent },
    { path: 'contacts/edit/:id', component: ContactEditComponent },
    { path: 'contacts/create', component: ContactCreateComponent },
];

export const PhonebookRoutingModule = RouterModule.forChild(routes)