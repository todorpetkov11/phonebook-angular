import { Injectable } from '@angular/core';
import * as moment from 'moment';
import jwt_decode, { JwtPayload } from 'jwt-decode';

@Injectable()
export class LocalStorageService {

    set(value: string) {
        const authResult: JwtPayload = jwt_decode(value);
        const expiresAt = moment().add(authResult.exp, 'second');
        localStorage.setItem("id_token", value);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    };

    getToken() {
        return localStorage.getItem('id_token')
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration!);
        return moment(expiresAt);
    };

    isTokenExpired(): boolean {
        const expiryTime: moment.Moment = this.getExpiration();
        if (expiryTime) {
          return ((1000 * Number(expiryTime)) - (new Date()).getTime()) < 5000;
        } else {
          return false;
        }
      }

    remove() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    };

    setTheme(darkTheme: boolean) {
        if (darkTheme) {
            localStorage.setItem('theme', 'dark');
            return;
        }
        localStorage.setItem('theme', 'light')
        return;

    };

    getTheme() {
        let theme = localStorage.getItem('theme');
        if (theme === 'light') {
            return false;
        };
        return true;
    };


}

function ngDoCheck() {
    throw new Error('Function not implemented.');
}
