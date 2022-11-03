describe('autocomplete handling', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoqa')}/auto-complete`);
    });
    it('Autocomplete demo', () => {
        cy.get('.auto-complete__value-container').first().type('Y');
        cy.contains('#react-select-2-option-0', 'Yellow').click();
        cy.get('.css-12jo7m5').should('have.text', 'Yellow');
    });
});