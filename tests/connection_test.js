const loginPage = require("../pages/loginpage");
const dashboardPage = require("../pages/dashboardpage");
const connectionsPage = require("../pages/connectionspage");

Feature('Connection');

Before(({ I }) => {
    I.amOnPage('/');
    loginPage.loadForm();
    loginPage.sendForm(loginPage.validInputs.clientID,loginPage.validInputs.clientSecret);
    dashboardPage.navLoad();
    //click on connections tab in navbar
    I.click(dashboardPage.navBar.connections);
    //click on create new connection
    I.click(connectionsPage.createNewBtn);
});

Scenario('Verify error message for empty channel on create button click', async ({ I }) => {
    //wait for create button
    I.waitForClickable(connectionsPage.createBtn, 20);
    //click on create button
    I.click(connectionsPage.createBtn);
    //Assert error message
    I.seeElement(connectionsPage.errorText.channelError);
});

Scenario('Verify shopUrl is not visible when channel is not selected', async ({ I }) => {
    //wait for create button
    I.waitForClickable(connectionsPage.createBtn, 20);
    //Assert shopurl is not visible
    I.dontSeeElement(connectionsPage.shopUrl)
});

Scenario('Verify shopUrl is visible when channel is selected', async ({ I }) => {
    //wait for create button
    I.waitForClickable(connectionsPage.createBtn, 20);
    //Select shopify
    I.selectOption(connectionsPage.channel,"Shopify");
    //Wait for shopurl
    I.waitForElement(connectionsPage.shopUrl, 200);
    //Assert shopurl
    I.seeElement(connectionsPage.shopUrl)
});

Scenario('Verify shopUrl cannot be empty without tag', async ({ I }) => {
    //wait for create button
    I.waitForClickable(connectionsPage.createBtn, 20);
    //select shopify
    I.selectOption(connectionsPage.channel,"Shopify");
    //wait for shopurl
    I.waitForElement(connectionsPage.shopUrl, 200);
    //Assert shopurl
    I.seeElement(connectionsPage.shopUrl);
    //click on create button
    I.click(connectionsPage.createBtn);
    //Assert error message
    I.seeElement(connectionsPage.errorText.shopNotEmpty);
});

Scenario('Verify error on invalid shopUrl without tag', async ({ I }) => {
    //wait for create button
    I.waitForClickable(connectionsPage.createBtn, 20);
    //select shopify
    I.selectOption(connectionsPage.channel,"Shopify");
    //wait for shopurl
    I.waitForElement(connectionsPage.shopUrl, 200);
    //Assert shopurl
    I.seeElement(connectionsPage.shopUrl);
    //Input shopurl
    I.fillField(connectionsPage.shopUrl,"http://e2eteststore.myshopify.com")
    //click create button
    I.click(connectionsPage.createBtn);
    //Assert error message
    I.seeElement(connectionsPage.errorText.shopInvalid);
});

Scenario('Verify shopUrl cannot be empty with tag', async ({ I }) => {
    //wait for create button
    I.waitForClickable(connectionsPage.createBtn, 20);
    //select shopify
    I.selectOption(connectionsPage.channel,"Shopify");
    //wait for shopurl
    I.waitForElement(connectionsPage.shopUrl, 200);
    //Assert shopurl
    I.seeElement(connectionsPage.shopUrl);
    //Input tag
    I.fillField(connectionsPage.tag, "Testing Tag")
    //Click create button
    I.click(connectionsPage.createBtn);
    //Assert error message
    I.seeElement(connectionsPage.errorText.shopNotEmpty);
});

Scenario('Verify error on invalid shopUrl with tag', async ({ I }) => {
    //wait for create button
    I.waitForClickable(connectionsPage.createBtn, 20);
    //select shopify
    I.selectOption(connectionsPage.channel,"Shopify");
    //wait for shopurl
    I.waitForElement(connectionsPage.shopUrl, 200);
    //Assert shopurl
    I.seeElement(connectionsPage.shopUrl);
    //Input shopurl
    I.fillField(connectionsPage.shopUrl,"http://e2eteststore.myshopify.com")
    //Input tag
    I.fillField(connectionsPage.tag, "Testing Tag")
    //Click create button
    I.click(connectionsPage.createBtn);
    //Assert error message
    I.seeElement(connectionsPage.errorText.shopInvalid);
});


Scenario('Verify user can create connection with valid shopUrl without tag', async ({ I }) => {
    //wait for create button
    I.waitForClickable(connectionsPage.createBtn, 20);
    //select shopify
    I.selectOption(connectionsPage.channel,"Shopify");
    //wait for shopurl
    I.waitForElement(connectionsPage.shopUrl, 200);
    //Assert shopurl
    I.seeElement(connectionsPage.shopUrl);
    //input shopurl
    I.fillField(connectionsPage.shopUrl,"https://e2eteststore.myshopify.com");
    //click create button
    I.click(connectionsPage.createBtn);
    //wait for information on page
    I.waitForElement(connectionsPage.connectionDetails.channelname, 200);
    I.seeElement(connectionsPage.connectionDetails.channelname);
    I.seeElement(connectionsPage.connectionDetails.lastupdated);
    I.dontSeeElement(connectionsPage.connectionDetails.connectionRequested);
    I.seeElement(connectionsPage.connectionDetails.connectionInput);
    I.dontSeeElement(connectionsPage.connectionDetails.tagValue);
});

Scenario('Verify user can create connection with valid shopUrl with tag', async ({ I }) => {
     //wait for create button
    I.waitForClickable(connectionsPage.createBtn, 20);
    //select shopify
    I.selectOption(connectionsPage.channel,"Shopify");
    //wait for shopurl
    I.waitForElement(connectionsPage.shopUrl, 200);
    //Assert shopurl
    I.seeElement(connectionsPage.shopUrl);
    //input shopurl
    I.fillField(connectionsPage.shopUrl,"https://e2eteststore.myshopify.com");
    //input tag
    I.fillField(connectionsPage.tag, "Testing Tag")
    //click on create button
    I.click(connectionsPage.createBtn);
    //wait for information on page
    I.waitForElement(connectionsPage.connectionDetails.channelname, 200);
    I.seeElement(connectionsPage.connectionDetails.channelname);
    I.seeElement(connectionsPage.connectionDetails.lastupdated);
    I.dontSeeElement(connectionsPage.connectionDetails.connectionRequested);
    I.seeElement(connectionsPage.connectionDetails.connectionInput);
    I.seeElement(connectionsPage.connectionDetails.tagValue);
});