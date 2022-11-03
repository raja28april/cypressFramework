describe('Drag and drop', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoqa')}/droppable`);
    });
    it('drag and drop using cypress-drag-drop library', () => {
        cy.get('#draggable').drag('#droppable', { force: true })
    });
});