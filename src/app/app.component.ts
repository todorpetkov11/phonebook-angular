import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  darkTheme: boolean = false;

  public changeTheme = () => {
    this.darkTheme = !this.darkTheme;
  }
}
