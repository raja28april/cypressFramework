describe('Retry ability demo', () => {
    it('visit with delay', () => {
        cy.visit('/loaddelay', { timeout: 40000 });
    });
    it('client delay button', () => {
        cy.get('.btn').click();

    });
    it('wait for progress bar', () => {
        cy.visit('/progressbar');
        cy.get('#startButton').click();
        cy.get('#progressBar', { timeout: 30000 }).should('have.text', '100%');
        // 100 %
    });
});