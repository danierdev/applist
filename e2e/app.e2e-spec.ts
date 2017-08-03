import { ApplistPage } from './app.po';

describe('applist App', () => {
  let page: ApplistPage;

  beforeEach(() => {
    page = new ApplistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
