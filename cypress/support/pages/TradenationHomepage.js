import { locators, string } from "../others/utils";

class TradeNationHomePage {
  visitHomePage() {
    cy.visit("/" + string.endpoint);

    try {
      cy.contains("Accept all cookies").click();
    } catch (error) {}
  }
  clickLogo() {
    cy.get(locators.logo).click();
  }

  getTitle() {
    return cy.title();
  }
}

export default TradeNationHomePage;
