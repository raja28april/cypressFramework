describe('', () => {
    beforeEach(() => {
        // cy.visit(`${Cypress.env('demoqa')}/broken`);
        cy.fixture('profile.json').as('testData')
    });
    it('Accessing the shared fixture1', () => {
        cy.get('@testData').then(data => {
            cy.log(data.email);
        });
    });
    it('Accessing the shared fixture2', () => {
        cy.get('@testData').then(data => {
            cy.log(data.id);
        });
    });
    it('Accessing the shared fixture3', () => {
        cy.get('@testData').then(data => {
            cy.log(data.name);
        });
    });
});