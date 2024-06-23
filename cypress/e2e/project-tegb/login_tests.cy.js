import { LoginPage } from "../../page-objects/project-tegb/login_page";

describe("Login tests", () => {
  beforeEach(() => {
    new LoginPage().openLoginPage();
  });
  it("User registration FE", () => {
    new LoginPage()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLoginButton();
  });
});
