describe('Accordian handling', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoqa')}/accordian`);
    });
    it('default accordian validation example', () => {
        cy.get('#section2Heading').click();
        //checking if first accordian is hidden
        cy.get('#section1Heading').next().should('have.css', 'display', 'none');
        //checking if first accordian is displayed
        cy.get('#section2Heading').next().should('have.css', 'display', 'block');
    });
});