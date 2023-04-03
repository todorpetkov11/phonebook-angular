import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import IContact from '../interfaces/ContactInterface';

const apiUrl = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class contactService {

    constructor(private http: HttpClient) { }

    getAllContacts(): Observable<IContact[]> {
        return this.http.get<IContact[]>(`${apiUrl}/contacts`)
    }

    editContact(editData: {}, contactId: string): Observable<IContact> {
        return this.http.put<IContact>(`${apiUrl}/contacts/${contactId}`, editData)
    }

    getContactById(contactId: string): Observable<IContact> {
        return this.http.get<IContact>(`${apiUrl}/contacts/${contactId}`)
    }

    getContactsByProfileId(id: string): Observable<IContact[]> {
        return this.http.get<IContact[]>(`${apiUrl}/contacts/user/${id}`)
    }

    getContactsWithParams(searchBy: string, param: string): Observable<IContact[]> {
        return this.http.get<IContact[]>(`${apiUrl}/contacts/?${searchBy}=${param}`)
    }

    createContact(contactData: {}): Observable<IContact> {
        return this.http.post<IContact>(`${apiUrl}/contacts/`, contactData)
    }

    deleteContact(contactId: string): Observable<IContact> {
        return this.http.delete<IContact>(`${apiUrl}/contacts/${contactId}`)
    }

}