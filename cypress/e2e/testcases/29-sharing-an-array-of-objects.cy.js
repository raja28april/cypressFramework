describe('array of object users', () => {

    it('getting user info based on fixtures', () => {
        cy.fixture('profile.json').its("users")
            .then(users => {
                cy.log(users[0].name);
            });
    });
});