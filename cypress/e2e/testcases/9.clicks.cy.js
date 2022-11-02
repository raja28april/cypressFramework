describe('click tricks', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoqa')}/buttons`);
    });

    it('double click', () => {
        cy.get('#doubleClickBtn').dblclick();
        cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
    });

    it('right click', () => {
        cy.get('#rightClickBtn').rightclick();
        cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
    });
});