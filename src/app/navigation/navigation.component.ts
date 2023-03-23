import { Component, Input } from '@angular/core';
import { faContactBook, faHome, faSignIn, faSun, faMoon, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  public faContactBook = faContactBook;
  public faHome = faHome;
  public faSignIn = faSignIn;
  public faSun = faSun;
  public faMoon = faMoon;
  public faUser = faUser;

  @Input() changeTheme!: () => void;
  @Input() darkTheme!: boolean;

}
