import { DashboardPage } from "../../page-objects/project-tegb/dashboard_page";
import { faker } from "@faker-js/faker";

describe("Profile Details Tests", () => {
  beforeEach(() => {
    new DashboardPage().openDashboardPage();
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
      .clickEditProfileButton();
  });
});
