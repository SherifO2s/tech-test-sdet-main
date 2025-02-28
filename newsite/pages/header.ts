import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export class Header extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  headerElements = {
    root: () => this.page.locator(".primary_header"),
    getBurgerButton: () => this.headerElements.root().locator("button"),
    getShoppingCartButton: () =>
      this.headerElements.root().locator("#shopping_cart_container"),
    headerTitle: () => this.headerElements.root().locator(".app_logo"),
  };

  async clickHeaderItem(elementName: "shoppingCart" | "burgerMenu") {
    let element: Locator;

    switch (elementName) {
      case "shoppingCart":
        element = this.headerElements.getShoppingCartButton();
        break;
      case "burgerMenu":
        element = this.headerElements.getBurgerButton();
        break;
      default:
        throw new Error(`Invalid header item: ${elementName}`);
    }

    await element.click();
  }
}
