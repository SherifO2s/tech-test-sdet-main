import { Locator, Page, expect } from '@playwright/test'
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

export class GoodstackPage {
  page: Page
  requestsSent: Request[] = []

  url: string

  constructor(page: Page) {
    this.page = page
    this.url = '/'
  }

  // INFO: LOCATORS
  menuElements = {
    root: () => this.page.locator('nav'),
    subMenuHeaderButton: (text: string) =>
      this.menuElements.root().locator('button').filter({ hasText: text }),
    headerLink: (text: string) =>
      this.menuElements.root().locator('li a').filter({ hasText: text }),
    getStartedButton: () => this.page
      .locator('button')
      .filter({ hasText: 'Get started' }),
    subMenuElement: (text: string) =>
      this.menuElements.root().locator('li a').filter({ hasText: text }),
  }

  footerElements = {
    root: () => this.page.locator('footer'),
    footerLink: (text: string) =>
      this.footerElements.root().locator('a').filter({ hasText: text }),
  }

  // INFO: ACTIONS
  public async visit(url?: string): Promise<any> {
    return this.page.goto(this.url, { waitUntil: 'networkidle' })
  }

  async clickMenuItem(menuItem: string) {
    const href = await this.menuElements
      .headerLink(menuItem)
      .getAttribute('href')
    await this.menuElements.headerLink(menuItem).click()

    return href
  }

  getFooterLinkHref(footerLink: string) {
    return this.footerElements.footerLink(footerLink).getAttribute('href')
  }

  async clickFooterLink(footerLink: string) {
    const href = await this.footerElements
      .footerLink(footerLink)
      .getAttribute('href')
    await this.footerElements.footerLink(footerLink).click()

    return href
  }

  // wait for url to exist and then assert against expected string 
  async waitForRedirectToUrl(expectedUrl: string, timeout: number = 30000) {  
    await this.page.waitForURL((url) => url.toString().includes(expectedUrl), { timeout });
    expect(this.page.url()).toContain(expectedUrl);
  }

  async isHeaderVisible(headerText: string, headerType: 'mainHeader' | 'subHeader'): Promise<boolean> {
    let element: Locator;

    // switch between checking if a mainHeader (h1) is displayed or a subHeader (h2)
    switch (headerType) {
      case 'mainHeader':
        element = this.page.locator('h1').filter({ hasText: headerText });
        break;
      case 'subHeader':
        element = this.page.locator('h2').filter({ hasText: headerText });
        break;
      default:
        throw new Error(`Invalid headerType: ${headerType}. Use 'mainHeader' or 'subHeader'.`);
    }

    return await element.isVisible();
  }

  async captureScreenshot( filePrefix = 'screenshot') {
    const screenshotDir = 'goodstack/tests/screenshots';
    // check if the path exist and if not create it
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir, { recursive: true });
    }

    const screenshotPath = `${screenshotDir}/${filePrefix}-${uuidv4()}.png`;
    await this.page.screenshot({ path: screenshotPath });

    console.log(`📸 Screenshot saved at: ${screenshotPath}`);
  }

  // async clickSubMenuElement(parent: string, subMenuElement: string) {
  //   await this.menuElements.subMenuHeaderButton(parent).click()
  //   const href = await this.menuElements
  //     .subMenuElement(subMenuElement)
  //     .getAttribute('href')
  //   await this.menuElements.subMenuElement(subMenuElement).click()

  //   return href
  // }
}
