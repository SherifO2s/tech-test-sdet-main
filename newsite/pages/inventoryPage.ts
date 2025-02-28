import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export class InventoryPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  inventoryElements = {
    root: () => this.page.locator("#inventory_container"),
    getAllProducts: () =>
      this.inventoryElements.root().locator(".inventory_item"),
    getProductName: (index: number) =>
      this.inventoryElements
        .getAllProducts()
        .nth(index)
        .locator('[data-test="inventory-item-name"]'),
    getAddToCartButton: (index: number) =>
      this.inventoryElements
        .getAllProducts()
        .nth(index)
        .locator(".pricebar button"),
  };

  async addItemToCart(productName: string) {
    const products = await this.inventoryElements.getAllProducts().count(); // Get total products

    for (let i = 0; i < products; i++) {
      const name = await this.inventoryElements.getProductName(i).textContent();

      if (name?.trim() === productName) {
        await this.inventoryElements.getAddToCartButton(i).click();
        console.log(`Added "${productName}" to cart`);
        break; 
      }
    }
  }
}
