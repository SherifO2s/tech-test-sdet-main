import { test as baseTest } from "@playwright/test";
import { InventoryPage } from "../pages/inventoryPage";
import { LoginPage } from "../pages/loginPage";
import { Header } from "../pages/header";

type pages = {
  inventoryPage: InventoryPage;
  loginPage: LoginPage;
  header: Header;
};

const testPages = baseTest.extend<pages>({
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  header: async ({ page }, use) => {
    await use(new Header(page));
  },
});

export const test = testPages;
export const expect = testPages.expect;
