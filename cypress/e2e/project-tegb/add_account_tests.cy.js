import { LoginPage } from "../../page-objects/project-tegb/login_page";
import { faker } from "@faker-js/faker";

describe("Add Account Tests", () => {
  /* Zbytečný test --> špatně pochopeno přidání účtu (= ve smyslu přihlašovacího)  
  let username;
  let password;
  let email;

  beforeEach(() => {
    username = faker.internet.userName();
    password = faker.internet.password();
    email = faker.internet.email();
    cy.log(username);
    cy.log(password);
    cy.log(email);
  });

  it.skip("Login Test", () => {
    new LoginPage()
      .openLoginPage()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLoginButton();

    cy.url().should("include", "/dashboard");
  });
});

it("Add new account via API", () => {
  cy.request({
    method: "OPTIONS",
    url: "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/accounts",
  }).then((response) => {
    expect(response.status).to.eq(204);
  });
*/
  beforeEach(() => {
    new LoginPage()
      .openLoginPage()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLoginButton();
  });

  it("Mock Get Account API", () => {
    cy.intercept("/tegb/accounts", {
      fixture: "mock_accounts.json",
    }).as("accounts_api");
  });
});
