import { LoginPage } from "./login_page";

export class RegistrationPage {
  constructor() {
    this.url = "https://tegb-frontend-88542200c6db.herokuapp.com/register";
    this.usernameInput = "input[data-testid='username-input']";
    this.passwordInput = "input[data-testid='password-input']";
    this.emailInput = "input[data-testid='email-input']";
    this.registrationButton = "button[data-testid='submit-button']";
  }

  openRegistrationPage() {
    cy.visit(this.url);
    return this;
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  typeEmail(email) {
    cy.get(this.emailInput).type(email);
    return this;
  }

  clickRegistrationButton() {
    cy.get(this.registrationButton).click();
    return new LoginPage();
  }
}
