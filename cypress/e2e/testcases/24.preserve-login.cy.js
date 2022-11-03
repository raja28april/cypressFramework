Cypress.session.clearAllSavedSessions();

describe('Basic login', () => {
    beforeEach(() => {
        cy.session('mySession', () => {
            cy.visit(`${Cypress.env('demoqa')}/login`);
            cy.get('#userName').type('test');
            cy.get('#password').type('Test1234*');
            cy.get('#login').click();
            cy.url().should('contain', 'profile');
        });
    });
    it('check if session is saved', () => {
        cy.visit(`${Cypress.env('demoqa')}/login`);
    });
    it('check if session is saved-2', () => {
        cy.visit(`${Cypress.env('demoqa')}/login`);
    });
});