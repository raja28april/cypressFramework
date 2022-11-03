describe('Date picker', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoqa')}/date-picker`);
    });
    it('date picker and dropdown', () => {
        cy.get('#datePickerMonthYearInput').click();
        cy.get('.react-datepicker__year-select').select('1991');
        cy.get('.react-datepicker__month-select').select('April');
        // cy.get('.react-datepicker__day--028').click();
        cy.findByText('28').click();
        cy.get('#datePickerMonthYearInput').should('have.value', '04/28/1991');
    });
});