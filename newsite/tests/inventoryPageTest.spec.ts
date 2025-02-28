import { expect, test } from "../fixtures/pomFixtures";
import BasePage from "../pages/basePage";
import * as userLogin from "../testData/sauceLoginCredentials.json";

test.describe("Ecercise 2 - Checkout", () => {
  test(`Add product to cart`, async ({
    page,
    loginPage,
    inventoryPage,
    header,
  }) => {
    let basePage = new BasePage(page);

    await basePage.navigateTo();
    await loginPage.logginAsUser(
      userLogin.username.standard_user,
      userLogin.password
    );
    await inventoryPage.waitForRedirectToUrl("saucedemo.com/inventory.html");
    await inventoryPage.addItemToCart("Sauce Labs Onesie");
    await header.clickHeaderItem("shoppingCart");
    await page.close();
  });
});
