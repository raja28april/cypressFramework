describe('Menus handling', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoqa')}/menu`);
    });
    it('Menu example', () => {
        cy.contains('a', 'Main Item 2').realHover()
        cy.contains('a', 'SUB SUB LIST »').realHover()
        cy.get('a').contains('Sub Sub Item 1').click();
    });
});