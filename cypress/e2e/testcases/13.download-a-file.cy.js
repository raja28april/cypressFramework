describe('Download a file in the demo site', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoqa')}/upload-download`);
    });
    it('download the file', () => {
        cy.get('#downloadButton').click();
        // cy.get('#uploadedFilePath').should('contain', 'example.json');
        cy.verifyDownload('sampleFile.jpeg')
    });
});