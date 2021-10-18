const ContactUs = require("../../page_object/contact-us-page")
const MainPage = require("../../page_object/main-page")

const {expect} = require("chai");
const faker = require("faker");

describe('Contact us', () => {
    it.skip('Should be able to get in touch', () => {     
        browser.url('https://tinuiti.com/contact-us/');

        //Accept cookies in Cybot Cookies Dialog
        MainPage.$acceptCookiesBtn.waitForDisplayed();
        MainPage.$acceptCookiesBtn.click();

        //Fill out the form
        ContactUs.$pageTitle.waitForDisplayed();
        ContactUs.$firstNameTxt1.setValue(faker.name.firstName());
        ContactUs.$lastNameTxt.setValue(faker.name.lastName());
        ContactUs.$workEmailTxt.setValue(faker.internet.email());
        ContactUs.$phoneNumberTxt.setValue(faker.phone.phoneNumber());
        ContactUs.$websiteUrlTxt.setValue(faker.internet.url());
        ContactUs.$yourJobTitleTxt.setValue(faker.name.jobTitle());
        ContactUs.$monthlyAdvertisingSpendTxt.click();
        ContactUs.$under5KChoice.click();
        ContactUs.$howDidYouHearAboutUsTxt.click();
        ContactUs.$socialMediaChoice.click();
        ContactUs.$howCanWeHelpTxt.setValue('For Testing Purposes');

        //Submit the form
        ContactUs.$getInTouchBtn.click();
        ContactUs.$thankYouTitle.waitForDisplayed();

    });
})

