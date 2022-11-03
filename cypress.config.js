const { defineConfig } = require("cypress");
//verify-downloads
const { verifyDownloadTasks } = require('cy-verify-downloads');

//Excel requirements
const xlsx = require('node-xlsx').default;
const fs = require('fs');
const path = require('path');
const mysql = require('mysql');
const faker = require('@faker-js/faker');
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
      //excel
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
      //sql
      on("task", {
        queryDb: query => {
          return queryTestDb(query, config);
        }
      });
      on("task", {
        freshUser: () => {
          let user = {
            // name: faker.name.firstName(),
            userId: faker.datatype.uuid(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
          };
          return user;
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
    //mysql db
    db: {
      host: "localhost",
      user: "root",
      password: "",
      database: "cypress_test"
    },

    //mobile validation
    mobileViewportWidthBreakpoint: 400,
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

function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}

