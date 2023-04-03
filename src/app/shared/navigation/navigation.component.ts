import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faContactBook, faHome, faSignIn, faSun, faMoon, faUser, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../core/services/AuthService';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(private router: Router, private authService: AuthService) { }

  public isLoggedIn: boolean = false;

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.isLoggedIn = this.authService.isLoggedIn();
      }
    })
  }

  public faContactBook = faContactBook;
  public faHome = faHome;
  public faSignIn = faSignIn;
  public faSun = faSun;
  public faMoon = faMoon;
  public faUser = faUser;
  public faLogout = faSignOut;

  public onLogout() {
    this.router.navigate(['/login']);
    this.authService.logout().subscribe();
    
  };

  public onChangeTheme() {
    this.changeTheme();
  };

  @Input() changeTheme!: () => void;
  @Input() darkTheme!: boolean;

}
