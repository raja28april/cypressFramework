describe('fixtures example', () => {

    it('Fixtures demo', () => {
        cy.fixture('profile.json').then(data => {
            cy.log(data.email);
        })
    });
});