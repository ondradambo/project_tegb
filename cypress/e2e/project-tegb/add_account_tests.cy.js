import { LoginPage } from "../../page-objects/project-tegb/login_page";

describe("Add Account Tests", () => {
  it("Add Account API Test", () => {
    new LoginPage()
      .openLoginPage()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLoginButton();
    // TODO: pokračovat ZDE
  });
});
