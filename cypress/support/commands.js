Cypress.Commands.add("loginViaBackend", () =>{
    cy.request({
      method: "POST",
      url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/login',
      body: {
        email: Cypress.env("userEmail"),
        password: Cypress.env("userPassword"),
        "g-recaptcha-response":""
      },
    }).then((resp) => {
      expect(resp.status).to.equal(200);
      expect(resp.body).to.have.property("token");
      expect(resp.body).to.have.property("user");
      window.localStorage.setItem("token", resp.body.token);
      window.localStorage.setItem("user", JSON.stringify(resp.body.user));
      window.localStorage.setItem("user_id", resp.body.user.id);
    });
  })