import { CrudappPage } from './app.po';

describe('crudapp App', function() {
  let page: CrudappPage;

  beforeEach(() => {
    page = new CrudappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
