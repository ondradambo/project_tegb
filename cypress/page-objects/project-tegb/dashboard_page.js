export class DashboardPage {
  constructor() {
    this.url = "https://tegb-frontend-88542200c6db.herokuapp.com/dashboard";
    this.editProfileButton = "button[data-testid='toggle-edit-profile-button']";
    this.firstnameInput = "input[data-testid='chage-name-input']";
    this.surnameInput = "input[data-testid='chage-surname-input']";
    this.emailInput = "input[data-testid='chage-email-input']";
    this.phoneInput = "input[data-testid='chage-phone-input']";
    this.ageInput = "input[data-testid='chage-age-input']";
    // Save-changes-button nefunguje, použít místo něj Edit-profile-button
    this.saveChangesButton = "button[data-testid='save-changes-button']";
  }

  openDashboardPage() {
    cy.visit(this.url);
    return this;
  }

  clickEditProfileButton() {
    cy.get(this.editProfileButton).click();
    return this;
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

  clickEditProfileButton() {
    cy.get(this.editProfileButton).click();
    return new DashboardPage();
  }
}
