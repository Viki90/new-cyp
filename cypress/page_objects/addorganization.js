class AddOrganization {
    get addOrganizationHeading() {
        return cy.get('.vs-c-my-organizations-item-wrapper').contains('Add new Organization').click();
    }

    get organizationNameInput() {
        return cy.get('.el-form-item').find('input[name="name"]');
    }

    get nextButton() {
        return cy.get('button').contains('Next');
    }

    get createButton() {
        return cy.get('button').contains('Create');
    }

    get closeModal() {
        return cy.get('.vs-c-modal--features-button > .vs-c-btn');
    }

    addOrg(orgName) {
        this.organizationNameInput.type(orgName);
        this.nextButton.click();
        this.createButton.click();
        this.closeModal.click();
    }
}

export const addOrganization = new AddOrganization;