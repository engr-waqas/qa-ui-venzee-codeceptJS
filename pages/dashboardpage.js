const { I } = inject();

module.exports = {

  navBar: {
      channels: "//span[normalize-space()='Channels']",
      connections: "//span[normalize-space()='Connections']",
      distribution: "//span[normalize-space()='Distribution Packages']",
      source: "//span[normalize-space()='Source Document Schemas']",
      sreleases: "//span[normalize-space()='Source Document Schemas']",
      releases: "//span[normalize-space()='Releases']",
      webhooks: "//span[normalize-space()='Webhooks']"
  },
  navLoad() {
    I.waitForElement(this.navBar.channels, 20);
    I.waitForElement(this.navBar.connections, 20);
    I.waitForElement(this.navBar.distribution, 20);
    I.waitForElement(this.navBar.source, 20);
    I.waitForElement(this.navBar.sreleases, 20);
    I.waitForElement(this.navBar.releases, 20);
    I.waitForElement(this.navBar.webhooks, 20);
  }
}
