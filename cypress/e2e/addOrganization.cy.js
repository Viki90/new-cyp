/// <reference types="cypress" />

import { addOrganization } from '../page_objects/addorganization';
import { addBoard } from '../page_objects/addBoard';

describe("add organization", () => {
    
    it("add organization with valid data", () => {
        cy.loginViaBackend();
        cy.visit("/my-organizations");
        addOrganization.addOrganizationHeading.should('be.visible');
        addOrganization.organizationNameInput.should('be.visible');
        addOrganization.nextButton.should('be.visible')
            .and('have.css', 'background-color')
            .and('eq', 'rgb(62, 139, 117)');

        addOrganization.addOrg("viki1234");

        addBoard.addBoardHeading.should('be.visible');

        addBoard.addBoard("Vikinn");

    });



});