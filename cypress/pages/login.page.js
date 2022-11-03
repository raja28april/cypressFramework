import { Main } from "./Main.page";

class LoginPage extends Main {
    get username() {
        return cy.get('#userName');
    }

    get password() {
        return cy.get('#password');
    }

    get btn_login() {
        return cy.get('#login');
    }

    get invalidLoginMessage() {
        return cy.get('#name');
    }

    submitLogin(username, password) {
        this.username.type(username);
        this.password.type(password);
        this.btn_login.click();
    }

    visit() {
        cy.visit(`${Cypress.env('demoqa')}/login`);
    }
}
export default new LoginPage();