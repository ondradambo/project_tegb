import { DashboardPage } from "../../page-objects/project-tegb/dashboard_page";
import { LoginPage } from "../../page-objects/project-tegb/login_page";
import { faker } from "@faker-js/faker";

describe("Add Account and Logout Tests", () => {
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

  it("Check Account and its Balance is Visible", () => {
    cy.get('[data-testid="account-type"]').should("be.visible");
    cy.get('[data-testid="account-balance"]').should("be.visible");
  });

  it("Logout Test", () => {
    new DashboardPage().clickLogoutButton();
  });
});
