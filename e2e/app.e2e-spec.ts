import { AppPage } from './app-page.po';
import { browser } from 'protractor';

describe('Super Calculator', () => {
  let page: AppPage;
  let add;
  
  beforeEach(() => {
    page = new AppPage();

    add = function(a, b) {
      page.getFirstInput().sendKeys(a);
      page.getSecondInput().sendKeys(b);
      page.getButton().click();
    }
  });

  it('should have a title', () => {
    page.navigateTo();

    expect(page.getPageTitle()).toEqual('Super Calculator');
  });

  it('should have title element', () => {
    page.navigateTo();

    expect(page.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    page.getFirstInput().sendKeys(1);
    page.getSecondInput().sendKeys(2);

    page.getButton().click();

    expect(page.getResult()).toEqual('3');
  });

  it('should add five minus four', function() {
    page.getFirstInput().sendKeys(5);
    page.getSecondInput().sendKeys(4);
    page.getOperator().click();
    page.getOperatorOptions().last().click();

    page.getButton().click();

    expect(page.getResult()).toEqual('1');
  });

  it('should have a history', function() {
    page.navigateTo();

    add(1, 2);
    add(3, 4);

    expect(page.getHistory().count()).toEqual(2);

    add(5, 6);

    expect(page.getHistory().count()).toEqual(3);
  });

  it('should have a history', function() {
    page.navigateTo();

    add(1, 2);
    add(3, 4);

    expect(page.getHistory().last().getText()).toContain('1 + 2');
    expect(page.getHistory().first().getText()).toContain('3 + 4');
  });
});
