/// <reference types="cypress" />
import { loginPage } from "../../cypress/page_objects/login";

describe("login test", () => {
    before("visit vivify scrum", () => {
        cy.visit("/login");
        loginPage.loginHeading.should('be.visible')
            .and('have.text', 'Log in with your existing account')
            .and('have.class','vs-c-auth-modal-body__heading')
            .and('have.css', 'color', 'rgb(62, 139, 117)');
    });

    it("login with valid credentials", () => {
        loginPage.emailInput.should('be.visible')
        .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)');

        loginPage.passwordInput.should('be.visible')
        .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)');

        // loginPage.login(Cypress.env("userEmail"), Cypress.env("userPassword"));
        cy.loginViaBackend();
        cy.visit("/my-organizations");
    });

});
