import { AccountsCreateApi } from "../../api-objects/project-tegb/accounts_create_api";
import { LoginApi } from "../../api-objects/project-tegb/login_api";
import newTegbProjectData from "../../fixtures/tegb_project_DDT_data.json";
import { LoginPage } from "../../page-objects/project-tegb/login_page";
import { faker } from "@faker-js/faker";
import { RegistrationPage } from "../../page-objects/project-tegb/registration_page";

describe("DDT Tests", () => {
  let email;
  let username;
  let password;

  beforeEach(() => {
    email = faker.internet.exampleEmail();
    username = faker.internet.userName();
    password = faker.internet.password();
    new RegistrationPage()
      .openRegistrationPage()
      .typeUsername(username)
      .typePassword(password)
      .typeEmail(email)
      .clickRegistrationButton();
    new LoginPage()
      .openLoginPage()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLoginButton();
  });

  newTegbProjectData.forEach((accountData) => {
    it(`DDT test for account balance: ${accountData.startBalance}`, () => {
      let type = "Test";
      const startBalance = accountData.startBalance;
      const loginApi = new LoginApi();
      const accountsApi = new AccountsCreateApi();
      loginApi.login(username, password).as("user_id");
      loginApi.login(username, password).then((response) => {
        expect(response.status).to.eq(201);
        const accessTokenValue = response.body.access_token;
        cy.setCookie("access_token", accessTokenValue);
        cy.get("@user_id").then(() => {
          accountsApi
            .createAccount(accessTokenValue, type, startBalance)
            .then((response) => {
              expect(response.status).to.eq(201);
            });
        });
      });

      new LoginPage()
        .openLoginPage()
        .typeUsername(Cypress.env("tegb_username"))
        .typePassword(Cypress.env("tegb_password"))
        .clickLoginButton()
        .accountBalanceHasText(startBalance)
        .accountTypeHasText(type);
    });
  });
});
