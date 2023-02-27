const { I } = inject();

module.exports = {

  createNewBtn: "//button[@class='css-dk96nd']",
  newConnectionHeading: "//div[contains(text(),'New Connection')]",
  createBtn: "//button[normalize-space()='Create']",
  channel: "//select[@name='key']",
  shopUrl: "//input[@name='shopUrl']",
  tag: "//input[@name='tag']",
  errorText: {
      channelError: "//div[text()='key is a required field']",
      shopNotEmpty: "//div[text()='shopUrl is a required field']",
      shopInvalid: "//div[@class='css-cvbeev']"
  },
  connectionDetails: {
      channelname: "//span[normalize-space()='Shopify']",
      lastupdated: "//label[normalize-space()='Last Updated']",
      tagValue: "//span[normalize-space()='TESTING TAG']",
      connectionRequested: "//span[normalize-space()='channelConnection.requested']",
      connectionInput:"//span[normalize-space()='connection.requiresInput']"
  }
}
