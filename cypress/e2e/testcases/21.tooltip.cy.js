describe('Toop tip handling', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoqa')}/tool-tips`);
    });
    it('tool tip demo', () => {
        cy.get('#toolTipButton').realHover();
        cy.get('div[role="tooltip"]').should('have.text', 'You hovered over the Button');
    });

    it('<a> tag tool tip', () => {

        cy.contains('a', 'Contrary').realHover();
        cy.get('div[role="tooltip"]').should('have.text', 'You hovered over the Contrary');
    });
});