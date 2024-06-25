export class LoginApi {
  login(username, password) {
    return cy.request({
      method: "POST",
      url: Cypress.env("tegb_banking_api_url") + "/tegb/login",
      body: {
        username: username,
        password: password,
      },
    });
  }
}
