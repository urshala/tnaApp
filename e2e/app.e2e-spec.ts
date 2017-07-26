import { TnaappPage } from './app.po';

describe('tnaapp App', () => {
  let page: TnaappPage;

  beforeEach(() => {
    page = new TnaappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
