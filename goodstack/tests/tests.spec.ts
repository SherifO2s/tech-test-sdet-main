import { expect, test } from "@playwright/test";
import { GoodstackPage } from "../pages/base.page";

test.describe("execute", () => {
  test.skip(`test`, async ({ page }) => {
    let homePage = new GoodstackPage(page);
    await homePage.visit();

    await page
      .locator("nav")
      .locator("button")
      .filter({ hasText: "Produts" })
      .click();
    await page
      .locator("nav")
      .locator("li a")
      .filter({ hasText: "Donations" })
      .click();

    await page.waitForTimeout(1000);

    const element = await page
      .locator("h2")
      .filter({ hasText: "Track and manage everything a one place" });

    expect(await element.isVisible()).toBeTruthy();

    await page.screenshot({ path: "screenshot.png" });
  });

  test(`Exercise 1`, async ({ page }) => {
    let homePage = new GoodstackPage(page);
    await homePage.visit();

    await homePage.menuElements.subMenuHeaderButton("Products").click();
    await homePage.menuElements.subMenuElement("Donations").click();
    await homePage.waitForRedirectToUrl("/donations");
    await homePage.isHeaderVisible(
      "Track and manage everything in one place",
      "subHeader"
    );

    await homePage.captureScreenshot("donations");
    await page.close();
  });
});
