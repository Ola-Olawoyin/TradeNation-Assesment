const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.js",
    baseUrl: "https://tradenation.com",
    chromeWebSecurity: false,
    experimentalSourceRewriting: true,
    experimentalOriginDependencies: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    viewportWidth: 1280,
    viewportHeight: 800,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    env: {
      googleUrl: "https://accounts.google.com",
      googleErrorLocator: "#af-error-container",
    },
    video: true,
  },

  retries: {
    runMode: 2,
    openMode: 2,
  },
});
