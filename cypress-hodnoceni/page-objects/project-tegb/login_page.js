import { DashboardPage } from "./dashboard_page";

export class LoginPage {
  constructor() {
    this.url = "https://tegb-frontend-88542200c6db.herokuapp.com/";
    this.usernameInput = "input[data-testid='username-input']";
    this.passwordInput = "input[data-testid='password-input']";
    this.loginButton = "button[data-testid='submit-button']";
    cy.intercept("/tegb/profile").as("login_api");
    cy.intercept("/tegb/accounts").as("accounts_api");
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
    cy.wait("@login_api");
    cy.wait("@accounts_api");
    return new DashboardPage();
  }
}
