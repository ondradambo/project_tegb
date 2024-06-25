import { customElement } from "../../helpers/custom_element";
import { DashboardPage } from "./dashboard_page";

export class MenuSection extends DashboardPage {
  constructor() {
    super();
    this.homeButton = customElement("li:nth-child(1)");
    this.accountsButton = customElement("li:nth-child(2)");
    this.transactionsButton = customElement("li:nth-child(3)");
    this.supportButton = customElement("li:nth-child(4)");
  }
}
