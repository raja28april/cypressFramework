describe('chcekbox handlings - demoqa app', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('demoqa')}/checkbox`);
    });
    it('checkbox force true', () => {
        cy.get('.rct-checkbox').click({ force: true });
    });
});

describe.only('chcekbox -the internet app', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('theinternet')}/checkboxes`);
    });
    it('checkbox force true', () => {
        cy.get('form#checkboxes input').eq(0).click().should('be.checked');
    });
});