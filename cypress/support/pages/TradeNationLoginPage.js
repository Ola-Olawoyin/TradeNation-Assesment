import TradeNationHomePage from "./TradenationHomepage";
import { locators } from "../others/utils";
import { string } from "../others/utils";

const homePage = new TradeNationHomePage();

class TradeNationLoginPage {
  visitLoginPage() {
    homePage.visitHomePage();
    cy.contains(locators.loginButton).click();
  }

  navigateToLoginWithGooglePage() {
    cy.get(locators.usernameLocator).type(string.username);

    cy.log(string.username);
    cy.get(locators.loginWithGoogleButton).click();
  }

  getTitle() {
    return cy.title();
  }

  validateLoginWithGoogleError() {
    cy.origin(Cypress.env("googleUrl"), () => {
      cy.get(Cypress.env("googleErrorLocator"))
        .invoke("text")
        .then((error) => {
          cy.log(error);
          expect(error).to.contain(string.errorMessage);
        });
    });
  }
}

export default TradeNationLoginPage;
