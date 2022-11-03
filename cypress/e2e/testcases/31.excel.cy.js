describe('Excel handling', () => {
    beforeEach(() => {
        cy.parseXlsx('cypress/fixtures/sample.xlsx').then(excelData => {
            cy.log(excelData)
        });
    });
    it('excel file example', () => {
    });
});