const nowTimeStamp = new Date(Date.UTC(2022, 2, 14)).getTime();

describe('Clock example', () => {
    beforeEach(() => {
        cy.log('dataTimestamp: ', nowTimeStamp);
        cy.clock(nowTimeStamp);
        cy.visit('https://example.cypress.io/commands/spies-stubs-clocks')
    });
    it('clock demo', () => {
        cy.get('#clock-div').click().should('have.text', "1647216000");
    });
    it('tick demo', () => {
        cy.get('#clock-div').click().should('have.text', "1647216000");
        cy.log('Doing the cy.tick() to add to 10 seconds').then(() => {
            cy.tick(10000);//10 seconds passed
            cy.get('#tick-div').click().should('have.text', '1647216010')
        })

    });
});