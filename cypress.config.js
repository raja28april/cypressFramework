const { defineConfig } = require("cypress");
//verify-downloads
const { verifyDownloadTasks } = require('cy-verify-downloads');

//Excel requirements
const xlsx = require('node-xlsx').default;
const fs = require('fs');
const path = require('path');
// Parse a buffer
// const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/myFile.xlsx`));
// // Parse a file
// const workSheetsFromFile = xlsx.parse(`${__dirname}/myFile.xlsx`);

module.exports = defineConfig({
  e2e: {
    baseUrl: `http://uitestingplayground.com`,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', verifyDownloadTasks);

      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        }
      });

      require('cypress-mochawesome-reporter/plugin')(on);
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
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  "retries": {
    // Configure retry attempts for `cypress run`
    // Default is 0
    "runMode": 2,
    // Configure retry attempts for `cypress open`
    // Default is 0
    "openMode": 0
  },
  video: true,
  screenshotOnRunFailure: true
});
