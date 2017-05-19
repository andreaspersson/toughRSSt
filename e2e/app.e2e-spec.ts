import { ToughRSStPage } from './app.po';

describe('tough-rsst App', () => {
  let page: ToughRSStPage;

  beforeEach(() => {
    page = new ToughRSStPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
