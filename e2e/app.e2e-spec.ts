import { AspsPage } from './app.po';

describe('asps App', () => {
  let page: AspsPage;

  beforeEach(() => {
    page = new AspsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
