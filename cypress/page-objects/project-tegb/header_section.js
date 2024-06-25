import { LoginPage } from "./login_page";

export class HeaderSection {
  constructor() {
    this.logoutButton = 'button[class="logout-link"]';
    this.pageTitle = 'span[class="app-title"]';
    this.tegBLogo = 'img[data-testid="logo-img"]';
  }

  clickLogoutButton() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }
}
