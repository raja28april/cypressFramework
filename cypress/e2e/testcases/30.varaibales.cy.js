let externalVariable = 'test';

describe('variables', () => {
    beforeEach(() => {
        cy.visit(`/dynamicid`);
    });
    it('sharing variables', () => {
        cy.contains('button', 'Button with Dynamic ID')
            .invoke('text').then(text => {
                externalVariable = text;
                cy.wrap(externalVariable).as("updatedExternalVariable")
                cy.log(externalVariable);
            });
        cy.get('@updatedExternalVariable').then(val => {
            cy.log(`updated value is ${val}`)
        })
    });
    it('fetching val from last test', function () {
        externalVariable = this.updatedExternalVariable;
        cy.log(externalVariable)
    });
}); 