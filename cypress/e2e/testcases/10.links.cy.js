describe('dealing with links', () => {


    beforeEach(() => {
        cy.visit(`${Cypress.env('demoqa')}/links`);
    });

    it('approach1: not clicking on the link', () => {
        cy.get('#simpleLink').should('have.attr', 'href', 'https://demoqa.com');
        cy.get('#simpleLink').should('have.attr', 'target', '_blank');
    });

    it('approach2: new tab and so remove target', () => {
        cy.get('#simpleLink').invoke('removeAttr', 'target').click();
        cy.url().then(url => {
            expect(url).to.equal(`${Cypress.env('demoqa')}/`);
        })
        // cy.get('#simpleLink').should('have.attr', 'target', '_blank');
    });

    describe.only('intercepting api(spying) req after clicking on a button', () => {

        beforeEach(() => {
            cy.visit(`${Cypress.env('demoqa')}/links`);
            cy.intercept('GET', `${Cypress.env('demoqa')}/created`).as('linkstatus')
        });
        it('approach1', () => {
            cy.get('#created').click();
            cy.wait('@linkstatus').then((request) => {
                cy.log(`this is ${JSON.stringify(request)}`)
                expect(request.response.statusCode).to.be.equal(201);
                expect(request.response.statusMessage).to.be.equal('Created');
            })
        });
    });
});