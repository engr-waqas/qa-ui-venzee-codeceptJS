const dashboardpage = require("../pages/dashboardpage");
const loginpage = require("../pages/loginpage");

Feature('Login page of "https://qa-ui.venzee.io/login"');

Before(({ I }) => {
    I.amOnPage('/');
    loginpage.loadForm();
});

Scenario('Verify if the login page is opened', async ({ I }) => {
    //Assert Client ID input 
    I.seeElement(loginpage.fields.clientID);
    //Assert Client Secret input 
    I.seeElement(loginpage.fields.clientSecret);
    //Assert Sign In Button
    I.seeElement(loginpage.signInButton);
});

Scenario('Verify if the login is successful with valid input', async ({ I }) => {
    //Input Client ID
    //Input Client Secret
    //Click on Sign In Button
    loginpage.sendForm(loginpage.validInputs.clientID,loginpage.validInputs.clientSecret);
    //Assert login
    dashboardpage.navLoad();
});

Scenario('Verify if the login is unsuccessful with empty inputs', async ({ I }) => {
    //Click on Sign In Button
    loginpage.sendForm(" "," ")
    //Assert errors message for client ID
    I.seeElement(loginpage.errorTexts.clientID);
    //Assert erros messafe client Secert 
    I.seeElement(loginpage.errorTexts.clientSecret);
});

Scenario('Verify if the login is unsuccessful with empty client ID input', async ({ I }) => {
    //Input Client Secret
    //Click on Sign In Button
    loginpage.sendForm(" ",loginpage.errorTexts.clientSecret);
    //Assert errors message for client ID
    I.seeElement(loginpage.errorTexts.clientID);
});

Scenario('Verify if the login is unsuccessful with empty client Secret input', async ({ I }) => {
    //Input Client ID
    //Click on Sign In Button
    loginpage.sendForm(loginpage.validInputs.clientID," ");
    //Assert errors message for client Secret
    I.seeElement(loginpage.errorTexts.clientSecret);
});

Scenario('Verify if the login is unsuccessful with invalid inputs', async ({ I }) => {
    //Input invalid Client ID
    //Input invalid Client Secret 
    //Click on Sign In Button
    loginpage.sendForm(loginpage.invalidInputs.invalidclientID,loginpage.invalidInputs.invalidclientSecret)
    //Assert errors message
    I.waitForElement(loginpage.errorTexts.invalidInputs, 20);
});

Scenario('Verify if the login is unsuccessful with less than 8 characters in client ID input', async ({ I }) => {
    //Input Client Secret
    //Click on Sign In Button
    loginpage.sendForm(loginpage.invalidInputs.lessthen8clientID,loginpage.validInputs.clientSecret);
    //Assert errors message for client ID
    I.seeElement(loginpage.errorTexts.clientID);
});

Scenario('Verify if the login is unsuccessful with less than 8 characters in client Secret input', async ({ I }) => {
    //Input Client ID
    //Click on Sign In Button
    loginpage.sendForm(loginpage.validInputs.clientID,loginpage.invalidInputs.lessthen8clientSecret);
    //Assert errors message for client Secret
    I.seeElement(loginpage.errorTexts.invalidInputs);
});