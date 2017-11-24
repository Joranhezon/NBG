/* Class that defines if theme is Muse's or Aqours's */
export class ColorTheme {
  theme: string;

  constructor () {
    this.theme = 'muse';
  };

  changeTheme (theme: string) {
    this.theme = theme;
  }
}
