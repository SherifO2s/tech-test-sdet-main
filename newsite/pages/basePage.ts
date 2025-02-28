import { Page, expect, Request } from "@playwright/test";

export default class BasePage {
  page: Page;
  url: string;
  requestsSent: Request[] = [];

  constructor(page: Page, url: string = "https://www.saucedemo.com/") {
    this.page = page;
    this.url = url;
  }

  // Common method to navigate to a URL
  public async navigateTo(url?: string): Promise<void> {
    await this.page.goto(url || this.url, { waitUntil: "networkidle" });
  }

  // Wait for URL to exist and then assert against the expected string
  async waitForRedirectToUrl(expectedUrl: string, timeout: number = 10000) {  
    await this.page.waitForURL((url) => url.toString().includes(expectedUrl), { timeout });
    // Validate the current URL contains the expected URL fragment
    expect(this.page.url()).toContain(expectedUrl);
  }
  
}
