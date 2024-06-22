///<reference types = "cypress" />

import TradeNationHomePage from "../../support/pages/TradenationHomepage";
import { string } from "../../support/others/utils";

describe("Home Page Test", () => {
  const homePage = new TradeNationHomePage();

  beforeEach(() => {
    homePage.visitHomePage();
  });

  it("Validates HomePage Navigation Successfully", () => {
    homePage.visitHomePage();
    homePage.getTitle().should("contain.string", string.homePageTitle);
  });
  it("Validates Trade Nation Logo Successfully", () => {
    homePage.clickLogo();
    homePage.getTitle().should("have.string", string.tradeNationPageTitle);
  });
});
