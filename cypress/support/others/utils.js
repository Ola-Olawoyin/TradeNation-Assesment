import { faker } from "@faker-js/faker";

export const locators = {
  logo: "[data-testid='logo']",
  loginButton: "Log In",
  loginWithGoogleButton: "[data-testid='AppleIcon']",
  usernameLocator: "#username",
  password: "#password",
  cookies: "#onetrust-accept-btn-handler",
};

export const string = {
  endpoint: "en-gb/markets/#forex",
  username: faker.internet.email(),
  loginPageTitle: "Log In | Trade Nation",
  homePageTitle: "Ready to Trade On Popular Markets with Us? — Trade Nation",
  tradeNationPageTitle: "Trade Nation - a broker with a global reach",
  googleUrl: "https://accounts.google.com",
  errorPageTitle: "Error 403 (Forbidden)!!1",
  errorMessage: "403. That’s an error.We're sorry",
};
