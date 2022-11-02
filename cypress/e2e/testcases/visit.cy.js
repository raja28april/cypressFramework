describe('UI element handlings', () => {
    it('visit', () => {
        cy.visit('/')
    });

    it('url', () => {
        cy.url().then(url => {
            cy.log(`url is ${url}`);
            expect(url).to.contains("test")
        })
    });
});