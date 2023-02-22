class LoginPage {
    get loginHeading() {
        return cy.get('h1');
    }

    get emailInput() {
        return cy.get("[type='email']");
    }

    get passwordInput() {
        return cy.get(".el-input__inner").eq(1);
    }

    get loginBtn() {
        return cy.get('button[type="submit"]');
    }

    login(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.loginBtn.click();
    }
}

export const loginPage = new LoginPage;