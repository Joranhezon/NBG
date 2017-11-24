import { Component } from '@angular/core';
import { ColorTheme } from '../../models/color-theme';

@Component({
  styleUrls:['./side-menu.component.css'],
  templateUrl:'side-menu.component.html'
})

export class SideMenuComponent {
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
