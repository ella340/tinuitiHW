"use strict";
class ContactUs {
    get $pageTitle() {return $('h1=Ready to rethink your marketing strategy?');}
    get $firstNameTxt1() {return $('[id="FirstName"]');}
    get $lastNameTxt() {return $('[id="LastName"]');}
    get $workEmailTxt() {return $('[id="Email"]');}
    get $phoneNumberTxt() {return $('[id="Phone"]');}
    get $websiteUrlTxt() {return $('[id="Site"]');}
    get $yourJobTitleTxt() {return $('[id="Title"]');} 
    get $monthlyAdvertisingSpendTxt() {return $('[id="Budget__c"]');}
    get $under5KChoice() {return $('[value="$5,000 - $15,000"]');}
    get $howDidYouHearAboutUsTxt() {return $('[id="How_did_you_hear_about_us_Picklist__c"]');}
    get $socialMediaChoice() {return $('[value="Social Media"]');} 
    get $howCanWeHelpTxt() {return $('[id="Write_In_Comments__c"]')} 
    get $getInTouchBtn() {return $('[class="mktoButton"]');}
    get $thankYouTitle() {return $('h1=Thank You');}
}

module.exports = new ContactUs();