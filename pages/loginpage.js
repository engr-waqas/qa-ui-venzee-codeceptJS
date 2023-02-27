const { I } = inject();

module.exports = {

  fields: {
    clientID: "//input[@name='username']",
    clientSecret: "//input[@name='password']"
  },
  signInButton: "//button[@class='css-dijfcm']",
  errorTexts: {
    clientID: "//div[normalize-space()='username must be at least 8 characters']",
    clientSecret: "//div[normalize-space()='password must be at least 8 characters']",
    invalidInputs: "//div[@class='css-cvbeev']"
  },
  validInputs:{
    clientID:"41658kvjp6be0nmg0oco5hoq7j",
    clientSecret:"1au661edm4a3vff23d4la85jcv65cfvn6svg60dojbb4hckvjn4j"
  },
  invalidInputs:{
    emptyclientID:" ",
    emptyclientSecret:" ",
    invalidclientID:"41658;kvjp6beg0o",
    invalidclientSecret:"1au661edm4a3vfd4la85jcv65cojbb4hckvjn4j",
    lessthen8clientID:"123456",
    lessthen8clientSecret:"123456"
  },
  sendForm(ID, Secret) {
    I.fillField(this.fields.clientID, ID);
    I.fillField(this.fields.clientSecret, Secret);
    I.click(this.signInButton);
  },
  loadForm() {
    I.waitForElement(this.fields.clientID, 2000);
    I.waitForElement(this.fields.clientSecret, 2000);
    I.waitForElement(this.signInButton, 2000);
  }
}
