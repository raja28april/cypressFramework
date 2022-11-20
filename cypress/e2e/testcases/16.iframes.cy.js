describe('Iframes handlind', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoqa')}/nestedframes`);
    });
    it('sample and nested iframes', () => {
        cy.get('#frame1').then($iframe => {
            const $body = $iframe.contents().find("body");
            cy.wrap($body).should('have.text', 'Parent frame');
            cy.wrap($body).find('iframe').then($childFrame => {
                const $childBody = $childFrame.contents().find("body");
                // cy.wrap($childBody).should('have.text', 'Child Iframe');
                cy.wrap($childBody).find('p').should('have.text', 'Child Iframe');//another approach
            })
        })
    });
});

describe.only('Typing in an iframe - the internet app', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('theinternet')}/iframe`);
    });
    it('Iframe demo', () => {
        cy.get('#mce_0_ifr').then(iframe => {
            const $body = iframe.contents().find('body');
            let bod = cy.wrap($body);
            cy.log(bod);
            cy.wrap($body).find('p').type(`{selectAll}Hello world!`);
            cy.wrap($body).find('p').should('have.text', 'Hello world!');
        })
    });
});