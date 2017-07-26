import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Turku Nepali Association Ry';
  navTitles = ['home', 'events', 'contact'];
  selected = 'home';
}
