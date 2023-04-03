import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Observable } from "rxjs";
import { shareReplay, tap } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import IUser from '../interfaces/UserInterface';
import { LocalStorageService } from './LocalStorageService';


const apiUrl = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private http: HttpClient, private storageService: LocalStorageService, private router: Router) { }

    private headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
    }
    
    private requestOptions = {
        headers: new HttpHeaders(this.headerDict).set('Authorization', 'Bearer ' + this.storageService.getToken())
    };

    public isLoggedIn() {
        return moment().isBefore(this.storageService.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }


    login(loginData: {}): Observable<IUser> {
        return this.http.post<IUser>(`${apiUrl}/login`, loginData).pipe(
            shareReplay(),
            tap((response) => {
                this.storageService.set(response.token)
                this.router.navigate(['/home'])
            })
        )
    }

    register(registerData: {}): Observable<IUser> {
        return this.http.post<IUser>(`${apiUrl}/register`, registerData).pipe(
            shareReplay(),
            tap((response) => {
                this.storageService.set(response.token)
                this.router.navigate(['/home'])
            })
        )
    }

    logout() {
        this.storageService.remove()
        return this.http.post<IUser>(`${apiUrl}/logout`, [], this.requestOptions)
    }
}