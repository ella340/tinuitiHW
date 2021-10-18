const MainPage = require("../../page_object/main-page");

const { expect } = require("chai");
const faker = require("faker");

describe('Main Page', () => {
    it('Should be able to subscribe', () => {    
        browser.url('./');
        //Accept cookies in Cybot Cookies Dialog
        MainPage.$acceptCookiesBtn.waitForDisplayed();
        MainPage.$acceptCookiesBtn.click();

        //Close view on demand dialogue box
        MainPage.$closeViewOnDemandBtn.waitForDisplayed();
        MainPage.$closeViewOnDemandBtn.click();

        //Fill out subscribe form
        MainPage.$firstNameTxt.waitForDisplayed();
        MainPage.$firstNameTxt.setValue(faker.name.firstName());
        MainPage.$workEmailTxt.setValue(faker.internet.email());
        MainPage.$whatAreYouMostInterestedInTxt.click();
        MainPage.$whatAreYouMostInterestedInFirstOption.click();
        MainPage.$subscribeBtn.click();
        MainPage.$thankYouTxt.waitForDisplayed();
    });
})