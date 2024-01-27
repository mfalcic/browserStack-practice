const bundler  = require('@bahmutov/cypress-esbuild-preprocessor')
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  "chromeWebSecurity": false,
  e2e: {
    viewportHeight: 800,
    viewportWidth: 1280,
    experimentalStudio: true, 
    failOnStatusCode: false,
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/',

    "env": {
    },

    "retries": 
    {
      "runMode": 2,

      
      "openMode": 1
    },
    "reporterOptions": {
      "reportDir": "cypress/reports",
      "charts": true,
      "overwrite": true,
      "html": true,
      "json": true,
      "saveAllAttempts":"false",
      "reportPageTitle": "browserStack integration test report",
      "embeddedScreenshots": true,
      "inlineAssets": true,
      },
      "video": false,
    setupNodeEvents(on, config) {
      on('file:preprocessor', bundler())
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});
