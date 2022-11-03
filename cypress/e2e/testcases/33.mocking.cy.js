describe('Mocking an API request', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoqa')}/login`);
    });
    it('mocking data', () => {
        cy.login("test", "Test1234*");
        cy.intercept('GET', `${Cypress.env('demoqa')}/Account/v1/User/7d01de84-9527-4855-a10c-043a637178b3`, { fixture: "mockData.json" }).as('mockDemo');
    });
});