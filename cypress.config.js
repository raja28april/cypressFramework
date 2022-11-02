const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: `http://uitestingplayground.com`,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 4000,
  viewportHeight: 1000,
  viewportWidth: 1400,
  env: {
    stage: "stageEnv",
    uitest: "uitestingplayground",
    demoqa: "https://demoqa.com/",
    angular: "https://www.globalsqa.com/",
    theinternet: "https://theinternet.herokuapp.com/"
  }
});
