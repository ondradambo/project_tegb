import { LoginPage } from "../../page-objects/project-tegb/login_page";
import { MenuSection } from "../../page-objects/project-tegb/menu_section";
import { RegistrationPage } from "../../page-objects/project-tegb/registration_page";
import { faker } from "@faker-js/faker";

describe("Users Page Atomic Tests", { testIsolation: false }, () => {
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();

    const email = faker.internet.exampleEmail();
    const username = faker.internet.userName();
    const password = faker.internet.password();

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

  context("Menu Tests", () => {
    it("Home button is visible", () => {
      new MenuSection().homeButton.isVisible();
    });
    it.only("Home button has text", () => {
      new MenuSection().homeButton.hasText("Domů");
    });

    it("Accounts button is visible", () => {
      new MenuSection().accountsButton.isVisible();
    });

    it("Accounts button has text", () => {
      new MenuSection().accountsButton.hasText("Účty");
    });

    it("Transactions button is visible", () => {
      new MenuSection().transactionsButton.isVisible();
    });

    it("Transactions button has text", () => {
      new MenuSection().transactionsButton.hasText("Transakce");
    });

    it("Support button is visible", () => {
      new MenuSection().supportButton.isVisible();
    });

    it("Support button has text", () => {
      new MenuSection().supportButton.hasText("Podpora");
    });
  });
});

// TODO: Dashboard Content Tests
