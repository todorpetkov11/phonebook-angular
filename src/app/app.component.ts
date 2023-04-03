import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/AuthService';
import { LocalStorageService } from './core/services/LocalStorageService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private storageService: LocalStorageService) { }

  ngOnInit(): void {
    if (this.storageService.isTokenExpired()) {
      // this.storageService.remove();
    }
  }



  darkTheme: boolean = this.storageService.getTheme();

  public changeTheme = () => {
    this.darkTheme = !this.darkTheme;
    this.storageService.setTheme(this.darkTheme);
  };

}
