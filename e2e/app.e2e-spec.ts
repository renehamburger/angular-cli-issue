import { AngularCliDefaultProjectWithExceptionPage } from './app.po';

describe('angular-cli-default-project-with-exception App', function() {
  let page: AngularCliDefaultProjectWithExceptionPage;

  beforeEach(() => {
    page = new AngularCliDefaultProjectWithExceptionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
