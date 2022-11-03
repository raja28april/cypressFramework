describe('Upload a file in the demo site', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoqa')}/upload-download`);
    });
    it('Upload the file', () => {
        cy.get('#uploadFile').attachFile('example.json');
        cy.get('#uploadedFilePath').should('contain', 'example.json');
    });
});