describe('env variables examples', () => {
    it('example1', () => {
        cy.log(Cypress.env('stage'));
    });
});