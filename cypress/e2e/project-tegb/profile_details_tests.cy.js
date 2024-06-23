import { DashboardPage } from "../../page-objects/project-tegb/dashboard_page";
import { faker } from "@faker-js/faker";
import { LoginPage } from "../../page-objects/project-tegb/login_page";

describe("Profile Details Tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openLoginPage()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLoginButton();
  });

  it("Edit Profile Test", () => {
    const firstname = faker.internet.userName();
    const surname = faker.person.lastName();
    const email = faker.internet.email();
    const phone = faker.phone.number();
    // Výstup bude číslo mezi 18 a 120 včetně
    const age = Math.floor(Math.random() * 103) + 18;

    cy.log(firstname);
    cy.log(surname);
    cy.log(email);
    cy.log(phone);
    cy.log(age);

    new DashboardPage()
      .clickEditProfileButton()
      .typeFirstname(firstname)
      .typeSurname(surname)
      .typeEmail(email)
      .typePhone(phone)
      .typeAge(age)
      .clickSaveChangesButton();
  });
  it.only("Profile Details Check", () => {
    new DashboardPage().openDashboardPage();

    cy.get(this.profileDetailsName).should("have.text", firstname);
    cy.get(this.profileDetailsSurname).should("have.text", surname);
    cy.get(this.profileDetailsEmail).should("have.text", email);
    cy.get(this.profileDetailsPhone).should("have.text", phone);
    cy.get(this.profileDetailsAge).should("have.text", age);
  });
});
