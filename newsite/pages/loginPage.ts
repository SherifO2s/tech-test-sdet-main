import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  loginElement = {
    root: () => this.page.locator(".login_container"),
    getFormInput: (fieldName: "Username" | "Password") =>
      this.loginElement.root().locator(`[placeholder="${fieldName}"]`),
    getLoginButton: () => this.loginElement.root().locator("#login-button"),
  };

  
  async logginAsUser(username: string, password: string) {
    await this.loginElement
      .getFormInput("Username")
      .pressSequentially(username);
    await this.loginElement
      .getFormInput("Password")
      .pressSequentially(password);
    await this.loginElement.getLoginButton().click();
  }
}
