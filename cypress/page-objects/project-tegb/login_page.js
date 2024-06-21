import { DashboardPage } from "./dashboard_page";

export class LoginPage {
  constructor() {
    this.url = "https://tegb-frontend-88542200c6db.herokuapp.com/";
    this.usernameInput = "input[data-testid='username-input']";
    this.passwordInput = "input[data-testid='password-input']";
    this.loginButton = "button[data-testid='submit-button']";
  }

  openLoginPage() {
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

  clickLoginButton() {
    cy.get(this.loginButton).click();
    return new DashboardPage();
  }
}
