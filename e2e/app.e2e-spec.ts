import { AotIndexErrorPage } from './app.po';

describe('aot-index-error App', function() {
  let page: AotIndexErrorPage;

  beforeEach(() => {
    page = new AotIndexErrorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
