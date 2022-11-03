// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-real-events/support';
import './exceptions';
require('cypress-xpath');
require('cy-verify-downloads').addCustomCommand();

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
    cy.log('this is before each global block');
    // Cypress.session.clearAllSavedSessions();
    cy.session('mySession', () => {
        cy.visit(`${Cypress.env('demoqa')}/login`);
        cy.get('#userName').type('test');
        cy.get('#password').type('Test1234*');
        cy.get('#login').click();
        cy.url().should('contain', 'profile');
    });
});

after(() => {
    Cypress.session.clearAllSavedSessions();
    cy.clearCookies();
});