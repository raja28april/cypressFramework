describe('Dynamic tables', () => {

    beforeEach(() => {
        cy.visit('/dynamictable')
    });
    it('table rows and cells', () => {
        cy.get('div[role="table"] div[role="row"] span').each($cell => {
            // cy.log($cell.text());
            if ($cell.text().includes('Chrome')) {
                cy.log(`I have found ${$cell.text()} row`);
                let chromeRowValues = [];
                for (const cell of $cell.nextAll()) {
                    cy.get(cell).invoke('text').then(val => {
                        chromeRowValues.push(val);
                        cy.log(chromeRowValues);
                        chromeRowValues.forEach((chromeVal) => {
                            if (chromeVal.includes("%")) {
                                cy.get('.bg-warning').should('have.text', `Chrome CPU: ${chromeVal}`)
                            }
                        })
                    });
                }
            }
        })
    });
});