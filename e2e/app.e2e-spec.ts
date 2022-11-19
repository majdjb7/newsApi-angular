import { NewswebPage } from './app.po';

describe('newsweb App', function() {
  let page: NewswebPage;

  beforeEach(() => {
    page = new NewswebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
