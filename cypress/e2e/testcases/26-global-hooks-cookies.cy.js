describe('global hooks and cookies', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoqa')}/login`);
    });
    it('success login preserved', () => {
        cy.get('#userName-value').should('have.text', 'test');
    });
    it('counting the cookies', () => {
        cy.getCookies().then(cookies => {
            cy.log(cookies);
            expect(cookies).to.have.length(6);
        })
    });
});