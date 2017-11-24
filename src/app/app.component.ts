import { Component } from '@angular/core';
import { ColorTheme } from '../models/color-theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentTheme = new ColorTheme;

  /* Used to set app theme to Aqours */
  setAqoursTheme() {
    this.currentTheme.changeTheme('aqours');
  };

  /* Used to set app theme to Muse */
  setMuseTheme() {
    this.currentTheme.changeTheme('muse');
  }
}
