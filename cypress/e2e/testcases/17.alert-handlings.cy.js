describe('', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('theinternet')}/javascript_alerts`);
    });
    it('JS alerts', () => {
        cy.contains("button", "Click for JS Alert").click();
        cy.on('window:alert', message => {
            expect(message).to.be.equal('I am a JS Alert');
        });
        cy.on('window:confirm', () => true);
        cy.get('#result').should('have.text', 'You successfully clicked an alert');
    });

    it('JS alert confirm (accept)', () => {
        cy.get(':nth-child(2) > button').click();
        cy.on('window:confirm', () => true)
        cy.get('#result').should('have.text', 'You clicked: Ok')
    });

    it('JS alert confirm (cancel)', () => {
        cy.get(':nth-child(2) > button').click();
        cy.on('window:confirm', () => false)
        cy.get('#result').should('have.text', 'You clicked: Cancel');
    });

    it('JS alert prompt', () => {

        cy.window().then(window => {
            cy.stub(window, 'prompt').returns('This is Raja Ramasamy');
            cy.contains("button", "Click for JS Prompt").click();
        })
        cy.on('window:alert', () => {

        })
        cy.get('#result').should('have.text', 'You entered: This is Raja Ramasamy');
    });
});