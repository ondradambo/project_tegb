import { LoginApi } from "../../api-objects/project-tegb/login_api";
import { LoginPage } from "../../page-objects/project-tegb/login_page";

describe("Login tests", () => {
  beforeEach(() => {
    new LoginPage().openLoginPage();
  });
});

it("User Login", () => {
  new LoginPage()
    .openLoginPage()
    .typeUsername(Cypress.env("tegb_username"))
    .typePassword(Cypress.env("tegb_password"))
    .clickLoginButton();
});

// TODO: API test - kontrola tokenu
it("User Login via API", () => {
  new LoginApi().login("Ondřej Damborský", "123456").then((response) => {
    expect(response.status).to.eq(201);
  });
});
