import { NbgVendasPage } from './app.po';

describe('nbg-vendas App', () => {
  let page: NbgVendasPage;

  beforeEach(() => {
    page = new NbgVendasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
