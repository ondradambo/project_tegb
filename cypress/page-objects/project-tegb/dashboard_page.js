import { EditProfileModal } from "./edit_profile_modal";
import { HeaderSection } from "./header_section";
import { LoginPage } from "./login_page";

export class DashboardPage extends HeaderSection {
  constructor() {
    super();
    this.url = "https://tegb-frontend-88542200c6db.herokuapp.com/dashboard";
    this.editProfileButton = "button[data-testid='toggle-edit-profile-button']";
    this.profileDetailsName = "div[data-testid='name']";
    this.profileDetailsSurname = "div[data-testid='surname']";
    this.profileDetailsEmail = "div[data-testid='email']";
    this.profileDetailsPhone = "div[data-testid='phone']";
    this.profileDetailsAge = "div[data-testid='age']";
    this.logoutButton = "button[class='logout-link']";
    this.accountNumber = "td[data-testid='account-number']";
    this.accountBalance = "td[data-testid='account-balance']";
    this.accountType = "td[data-testid='account-type']";

    this.profileDetaisTitle = "h2[data-testid='profile-details-title']";
    this.accountsTitle = "h2[data-testid='accounts-title']";
    this.addAccountButton = ".account-action";
    this.accountNumberHeading = "th[data-testid='account-number-heading']";
    this.accountBalanceHeading = "th[data-testid='account-balance-heading']";
    this.accountTypeHeading = "th[data-testid='account-type-heading']";
    this.nameColumn = "div[data-testid='name'] strong";
    this.surnameColumn = "div[data-testid='surname'] strong";
    this.emailColumn = "div[data-testid='email'] strong";
    this.phoneColumn = "div[data-testid='phone'] strong";
    this.ageColumn = "div[data-testid='age'] strong";
  }

  openDashboardPage() {
    cy.visit(this.url);
    return this;
  }

  clickEditProfileButton() {
    cy.get(this.editProfileButton).click();
    return new EditProfileModal();
  }

  clickLogoutButton() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }

  profileDetailsNameHasText(name) {
    cy.get(this.profileDetailsName).should("contain.text", name);
    return this;
  }

  profileDetailsSurnameHasText(surname) {
    cy.get(this.profileDetailsSurname).should("contain.text", surname);
    return this;
  }

  profileDetailsEmailHasText(email) {
    cy.get(this.profileDetailsEmail).should("contain.text", email);
    return this;
  }

  profileDetailsPhoneHasText(phone) {
    cy.get(this.profileDetailsPhone).should("contain.text", phone);
    return this;
  }

  profileDetailsAgeHasText(age) {
    cy.get(this.profileDetailsAge).should("contain.text", age);
    return this;
  }

  accountNumberIsVisible() {
    cy.get(this.accountNumber).should("be.visible");
    return this;
  }

  accountNumberHasText(accountNumber) {
    cy.get(this.accountNumber).should("have.text", accountNumber);
    return this;
  }

  accountBalanceIsVisible() {
    cy.get(this.accountBalance).should("be.visible");
    return this;
  }

  accountBalanceHasText(accountBalance) {
    cy.get(this.accountBalance).should("contain.text", accountBalance);
    return this;
  }

  accountTypeIsVisible() {
    cy.get(this.accountType).should("be.visible");
    return this;
  }

  accountTypeHasText(accountType) {
    cy.get(this.accountType).should("have.text", accountType);
    return this;
  }
}
