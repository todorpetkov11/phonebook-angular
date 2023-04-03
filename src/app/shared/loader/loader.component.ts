import { Component } from '@angular/core';
import { faG, faGear } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  public faGear = faGear;

}
