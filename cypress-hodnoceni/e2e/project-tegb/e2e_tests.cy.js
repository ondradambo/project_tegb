import { LoginApi } from "../../api-objects/project-tegb/login_api";
import { LoginPage } from "../../page-objects/project-tegb/login_page";
import { RegistrationPage } from "../../page-objects/project-tegb/registration_page";
import { faker } from "@faker-js/faker";
import { AccountsCreateApi } from "../../api-objects/project-tegb/accounts_create_api";

describe("E2E Tests", () => {
  it("User Registration Test", () => {
    let startBalance = 1000;
    let type = "Test";
    const username = faker.internet.userName();
    const password = faker.internet.password();
    const email = faker.internet.email();
    const firstname = faker.internet.userName();
    const surname = faker.person.lastName();
    const phone = faker.phone.number();
    const age = faker.number.int({ min: 0, max: 120 });

    new RegistrationPage()
      .openRegistrationPage()
      .typeUsername(username)
      .typePassword(password)
      .typeEmail(email)
      .clickRegistrationButton();

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
      .typeUsername(username)
      .typePassword(password)
      .clickLoginButton()
      .clickEditProfileButton()
      .typeFirstname(firstname)
      .typeSurname(surname)
      .typeEmail(email)
      .typePhone(phone)
      .typeAge(age)
      .clickSaveChangesButton()
      .profileDetailsNameHasText(firstname)
      .profileDetailsSurnameHasText(surname)
      .profileDetailsEmailHasText(email)
      .profileDetailsPhoneHasText(phone)
      .profileDetailsAgeHasText(age)
      .accountNumberIsVisible()
      .accountBalanceIsVisible()
      .accountTypeIsVisible()
      .accountBalanceHasText(startBalance)
      .accountTypeHasText(type)
      .clickLogoutButton();
  });
});
