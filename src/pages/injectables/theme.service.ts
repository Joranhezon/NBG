import { Injectable } from '@angular/core';

@Injectable()
export class CurrentThemeService {
  theme: Object;

  constructor () {
  }

  setTheme (theme: string) {
    this.theme = theme;
  }

  getTheme () {
    return this.theme;
  }
}
