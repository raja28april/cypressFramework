describe('Faker js usage', () => {
    it('faker name', () => {
        cy.task('freshUser').then((object) => {
            cy.log(object.userId);
        })
    });
});