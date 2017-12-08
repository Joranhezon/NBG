import { Component } from '@angular/core';

/* Services import */
import { CurrentThemeService } from '../injectables/theme.service';

@Component({
  templateUrl: 'product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {

  constructor(public currentTheme: CurrentThemeService) {

  }

}
