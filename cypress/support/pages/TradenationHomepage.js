import { locators } from "../others/utils";

class TradeNationHomePage {
  visitHomePage() {
    cy.visit("/");
    cy.viewport(2000, 1500);
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
