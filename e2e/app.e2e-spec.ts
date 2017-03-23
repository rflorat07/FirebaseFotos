import { FarebaseFotosPage } from './app.po';

describe('farebase-fotos App', function() {
  let page: FarebaseFotosPage;

  beforeEach(() => {
    page = new FarebaseFotosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
