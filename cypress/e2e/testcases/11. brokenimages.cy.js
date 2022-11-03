// let img: HTMLImageElement; //using typescript type
describe('broken images', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoqa')}/broken`);
    });
    it('not broken image assertions', () => {
        cy.get('[src="/images/Toolsqa.jpg"]').should('be.visible')
            .and($img => {
                // img = $img[0] as unknown as HTMLImageElement; //-->using typescript type to check if  $img is of type HTMLImageElement
                expect($img[0].naturalWidth).to.be.greaterThan(0);
            });
    });
    it('broken image assertions', () => {
        cy.get('[src="/images/Toolsqa_1.jpg"]').should('be.visible')
            .and($img => {
                expect($img[0].naturalWidth).to.be.greaterThan(0);
            });
    });
});