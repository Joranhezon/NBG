import { Component } from '@angular/core';
import { ColorTheme } from '../models/color-theme';

/* Components import */
import { ProductComponent } from '../pages/product/product.component';

/* Services import */
import { CurrentThemeService } from '../pages/injectables/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  productPage = ProductComponent;
  currentTheme: ColorTheme;

  /* Sets service theme with the same value as component theme */
  constructor(private themeService: CurrentThemeService){
    this.themeService.setTheme(this.currentTheme.theme);
  }

  /* Used to set app theme to Aqours */
  setAqoursTheme() {
    this.currentTheme.changeTheme('aqours');
    this.themeService.setTheme('aqours');
  };

  /* Used to set app theme to Muse */
  setMuseTheme() {
    this.currentTheme.changeTheme('muse');
    this.themeService.setTheme('muse');
  }
}
