import { Bootsrap4Page } from './app.po';

describe('bootsrap4 App', function() {
  let page: Bootsrap4Page;

  beforeEach(() => {
    page = new Bootsrap4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
