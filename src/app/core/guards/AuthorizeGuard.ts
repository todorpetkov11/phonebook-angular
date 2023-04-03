import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/AuthService';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(): boolean | UrlTree {
        if (this.authService.isLoggedIn()) {
            return true;
        }

        return this.router.createUrlTree(['/login'])
    }

}