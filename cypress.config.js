const { defineConfig } = require("cypress");
//verify-downloads
const { verifyDownloadTasks } = require('cy-verify-downloads');

module.exports = defineConfig({
  e2e: {
    baseUrl: `http://uitestingplayground.com`,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', verifyDownloadTasks);
    },
    experimentalSessionAndOrigin: true,
  },
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 4000,
  viewportHeight: 1000,
  viewportWidth: 1400,
  env: {
    stage: "stageEnv",
    uitest: "uitestingplayground",
    demoqa: "https://demoqa.com",
    angular: "https://www.globalsqa.com",
    theinternet: "https://the-internet.herokuapp.com",
  },
});
