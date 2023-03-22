import { Component, Input } from '@angular/core';
import { faContactBook, faUser, faIndent, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  public faContactBook = faContactBook;
  public faUser = faUser;
  public faSignIn = faIndent;
  public faSun = faSun;
  public faMoon = faMoon;

  @Input() changeTheme!: () => void;
  @Input() darkTheme!: boolean;

}
