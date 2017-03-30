import { CourseAngularProjectPage } from './app.po';

describe('course-angular-project App', () => {
  let page: CourseAngularProjectPage;

  beforeEach(() => {
    page = new CourseAngularProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
