describe('using mysql db', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoqa')}/broken`);
    });
    it('db example', () => {
        cy.task(
            "queryDb",
            `SELECT * FROM SCHEMA_NAME.TABLE_NAME WHERE COLUMNS_NAME='VALUE'`
        ).then(result => {
            expect(result).to.have.lengthOf(1);
            // expect(result.affectedRows).to.equal(2);//when used update/ insert queries
            // expect(result.messages).equal('duplicates:0 entries:10');//when used update/ insert queries
        });
    });
});