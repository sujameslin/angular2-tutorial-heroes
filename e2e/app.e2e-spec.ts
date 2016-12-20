import { Angular2MovieQuizAppPage } from './app.po';

describe('angular2-movie-quiz-app App', function() {
  let page: Angular2MovieQuizAppPage;

  beforeEach(() => {
    page = new Angular2MovieQuizAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
