describe('UI element handlings', () => {
    it('visit', () => {
        cy.visit('/textinput')
    });

    it('url', () => {
        cy.url().then(url => {//because most methods in cypress yields doesn't return
            cy.log(`url is ${url}`);
            expect(url).to.contains("test")
        })
    });

    it('title validation', () => {
        cy.title().then(title => {
            expect(title).to.equal("Text Input");
        })
    });

    it('input challenge', () => {
        cy.get('input#newButtonName').type('Raja')
        cy.get('#updatingButton').click().should('have.text', 'Raja');
    });
});