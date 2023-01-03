# initialize npm

npm init -y

# install cypress npm package

npm install cypress

# open testrunner

npx cypress open

# run tests

npx cypress run

# run test via npm

npm run [testName or scriptName]

# upload file in cypress

npm install --save-dev cypress-file-upload and follow instructions in npm page to config as per cypress version

# download file in cypress

npm i -D cy-verify-downloads and follow instructions in npm page to config as per cypress version

# real events installation

npm i -D cypress-real-events and follow instructions in npm page to config as per cypress version

# cypress xpath installation

npm install -D cypress-xpath and follow instructions in npm page to config as per cypress version

# cypress testing library

npm install --save-dev @testing-library/cypress

# cypress drag and drop

npm install --save-dev @4tw/cypress-drag-drop

# Why page objects is not recommended in cypress

https://applitools.com/blog/page-objects-app-actions-cypress/

https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/

# Reporter

npm i --save-dev cypress-mochawesome-reporter

# excel handling

# mysql handling

reference: https://gist.github.com/fityanos/0a345e9e9de498b6c629f78e6b2835f5

# api fakes

https://jsonplaceholder.typicode.com/

# swagger page sample

https://demoqa.com/swagger/

# Cypress + WebKit!

Check this repo with a functional demo (and more information): Cypress + WebKit Repository

What is WebKit?

WebKit is the web browser engine used by Safari, Mail, App Store, and many other apps on macOS, iOS, and Linux. Get started contributing code, or reporting bugs.

Cypress is implementing a playwright-webkit library to add this browser coverage.

How to install and use it?

1. Add in the configuration file(cypress.config.js/ts): experimentalWebKitSupport: true

2. Install the webkit dependency: npm install --save-dev playwright-webkit

3. Open your terminal and open the test runner. You can see the new browser available.

4. You can send as well the browser parameter as: "--browser webkit"

You can access the latest changes in the last release.

Note:

WebKit support is experimental, so you may encounter issues. If you encounter an issue not on the "Known Issues" list, please open an issue on the GitHub repository.

UPDATE -> Reported at ISSUE, and here you have a full report:

flotwig commented 1 hour ago
Hi @JoanEsquivel, this is because experimentalSessionAndOrigin is not currently compatible with experimentalWebKitSupport: We are working on it: #23799

However, this user experience is not intended. You should get a cleaner error. I'll keep this issue open to track cleaning up this error.

# References

https://github.com/cypress-io/cypress-example-recipes/issues/410 --> alert handling in frames

# Issues faced and handled

## 503 unavailable when used cy.visit() 
use failOnStatusCode: false as below
cy.visit('url',{failOnStatusCode: false})

## how to remove unwanted xhr and fetch calls
add hideXHRInCommandLog: true, in cypress.config.js inside e2e object
and add below lines in support --> e2e.js
$$$$ To Hide fetch/XHR requests from command log$$$$$
if (Cypress.config("hideXHRInCommandLog")) {
    const app = window.top;

    if (
        app &&
        !app.document.head.querySelector("[data-hide-command-log-request]")
    ) {
        const style = app.document.createElement("style");
        style.innerHTML =
            ".command-name-request, .command-name-xhr { display: none }";
        style.setAttribute("data-hide-command-log-request", "");

        app.document.head.appendChild(style);
    }
}
