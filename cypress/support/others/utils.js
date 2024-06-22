import { faker } from "@faker-js/faker";

export const locators = {
  logo: "[data-testid='logo']",
  loginButton: "Log In",
  googleErrorLocator: "#af-error-container p",
  loginWithGoogleButton: "[data-testid='GoogleIcon']",
  usernameLocator: "#username",
  cookies: "#onetrust-accept-btn-handler",
};

export const string = {
  username: faker.internet.email(),
  loginPageTitle: "Log In | Trade Nation",
  homePageTitle: "Ready to Trade On Popular Markets with Us? — Trade Nation",
  tradeNationPageTitle: "Trade Nation - a broker with a global reach",
  googleUrl: "https://accounts.google.com",
  errorPageTitle: "Error 403 (Forbidden)!!1",
  errorMessage: "403. That’s an error.We're sorry",
};
