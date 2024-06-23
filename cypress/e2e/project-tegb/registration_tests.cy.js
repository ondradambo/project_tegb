import { RegistrationPage } from "../../page-objects/project-tegb/registration_page";
import { faker } from "@faker-js/faker";

describe("Registration Tests", () => {
  it("User Registration Test", () => {
    const username = faker.internet.userName();
    const password = faker.internet.password();
    const email = faker.internet.email();
    cy.log(username);
    cy.log(password);
    cy.log(email);

    new RegistrationPage()
      .openRegistrationPage()
      .typeUsername(username)
      .typePassword(password)
      .typeEmail(email)
      .clickRegistrationButton();
  });
});
