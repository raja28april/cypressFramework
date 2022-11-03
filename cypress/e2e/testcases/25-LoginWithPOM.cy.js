import ProfilePage from '../../pages/profile.page';
import LoginPage from './../../pages/login.page';

describe('Basic login', () => {
    beforeEach(() => {
        cy.session('mySession', () => {
            LoginPage.visit();
            LoginPage.submitLogin('test', 'Test1234*');
            cy.url().should('contain', 'profile');
        });
    });
    it('check if session is saved', () => {
        cy.visit(`${Cypress.env('demoqa')}/login`);
        ProfilePage.headerElement.should('have.text', 'Login');
    });
    it('check if session is saved-2', () => {
        cy.visit(`${Cypress.env('demoqa')}/login`);
    });
});