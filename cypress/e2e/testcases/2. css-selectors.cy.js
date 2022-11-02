describe('css selectors', () => {

    beforeEach(() => {
        cy.visit('/dynamicid');
    });
    it('contains method', () => {
        cy.contains('Button with Dynamic ID').should('have.text', 'Button with Dynamic ID');
    });

    it('cy.find method', () => {
        cy.get('div').find('button')
    });

    it('css selector with attribute', () => {
        cy.get('button[class="btn btn-primary"').should('have.text', 'Button with Dynamic ID');
    });
});