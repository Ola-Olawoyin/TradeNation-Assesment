const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.js",
    baseUrl: "https://tradenation.com/en-gb/markets/#forex",
    chromeWebSecurity: false,
    experimentalSourceRewriting: true,
    experimentalOriginDependencies: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    viewportWidth: 1280,
    viewportHeight: 800,
  },

  retries: {
    runMode: 0,
    openMode: 2,
  },

  env: {
    googleUrl: "https://accounts.google.com",
  },
});
