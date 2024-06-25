import { DashboardPage } from "./dashboard_page";

export class EditProfileModal {
  constructor() {
    this.firstnameInput = "input[data-testid='chage-name-input']";
    this.surnameInput = "input[data-testid='chage-surname-input']";
    this.emailInput = "input[data-testid='chage-email-input']";
    this.phoneInput = "input[data-testid='chage-phone-input']";
    this.ageInput = "input[data-testid='chage-age-input']";
    this.saveChangesButton = "button[data-testid='save-changes-button']";
    this.editProfileForm = ".account-summary";
    this.cancelChangesButton = "[data-testid='toggle-edit-profile-button']";
  }

  typeFirstname(firstname) {
    cy.get(this.firstnameInput).type(firstname);
    return this;
  }

  typeSurname(surname) {
    cy.get(this.surnameInput).type(surname);
    return this;
  }

  typeEmail(email) {
    cy.get(this.emailInput).type(email);
    return this;
  }

  typePhone(phone) {
    cy.get(this.phoneInput).type(phone);
    return this;
  }

  typeAge(age) {
    cy.get(this.ageInput).type(age);
    return this;
  }

  clickCancelChangesButton() {
    cy.get(this.cancelChangesButton).get().click();
    return new DashboardPage();
  }

  clickSaveChangesButton() {
    cy.get(this.saveChangesButton).click();
    return new DashboardPage();
  }
}
