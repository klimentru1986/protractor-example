import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('protractor-demo/');
  }

  getPageTitle() {
    return browser.getTitle();
  }

  getTitle() {
    return element(by.css('h3')).getText();
  }

  getFirstInput() {
    return element(by.model('first'));
  }

  getSecondInput() {
    return element(by.model('second'));
  }

  getOperator() {
    return element(by.model('operator'));
  }

  getOperatorOptions() {
    return element.all(by.css('option'));
  }

  getButton() {
    return element(by.id('gobutton'));
  }

  getResult() {
    return element(by.binding('latest')).getText();
  }

  getHistory() {
    return element.all(by.repeater('result in memory'));
  }
}
