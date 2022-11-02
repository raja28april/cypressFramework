describe('mouse hover and style assertions', () => {

    beforeEach(() => {
        cy.visit('/click');
    });

    it('class assertion', () => {
        cy.get('#badButton')
            .click()
            .should('have.class', 'btn-success');
    });

    it('background assertion', () => {
        cy.get('#badButton')
            .click()
            .should('have.css', 'background-color', 'rgb(40, 167, 69)');
    });

    it('mouse hover', () => {
        cy.visit('/mouseover')
        cy.get('.text-primary').trigger('mouseover')
    });
    it('mouse real hover', () => {
        cy.visit('/mouseover')
        cy.get('.text-primary').realHover();
    });
});