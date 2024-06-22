///<reference types = "cypress"/>
import TradeNationLoginPage from "../../support/pages/TradeNationLoginPage";
import { string } from "../../support/others/utils";

describe("Log In With Google", () => {
  const loginPage = new TradeNationLoginPage();
  it.only("Validates Unsuccessful Login with Google", () => {
    loginPage.visitLoginPage();
    loginPage.getTitle().should("have.string", string.loginPageTitle);

    loginPage.navigateToLoginWithGooglePage();

    loginPage.validateLoginWithGoogleError();
    loginPage.getTitle().should("have.string", string.errorPageTitle);
  });
});
