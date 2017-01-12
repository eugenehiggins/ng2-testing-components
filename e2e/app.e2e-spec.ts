import { TestingComponentsPage } from './app.po';

describe('testing-components App', function() {
  let page: TestingComponentsPage;

  beforeEach(() => {
    page = new TestingComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
