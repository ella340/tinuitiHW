"use strict";
class MainPage {
    get $acceptCookiesBtn() {return $('[id="CybotCookiebotDialogBodyButtonAccept"]');}
    get $closeViewOnDemandBtn() {return $('[class="CloseButton__ButtonElement-sc-79mh24-0 fCHcgg thornport-CloseButton thornport-close thornport-ClosePosition--top-right"]');}
    get $letsTalkBtn() {return $('[href="/contact-us"]')}
    get $firstNameTxt() {return $('[id="FirstName"]');}
    get $workEmailTxt() {return $('[id="Email"]');}
    get $whatAreYouMostInterestedInTxt() {return $('[id="Interest_Segment_Self_Selection__c"]');}
    get $whatAreYouMostInterestedInFirstOption() {return $('[value="Amazon & Marketplaces"]');}
    get $subscribeBtn() {return $('span [type="submit"]');}
    get $thankYouTxt() {return $('(h1=Thank You)');}
    
}

module.exports = new MainPage();