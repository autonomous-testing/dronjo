import { Page } from "@playwright/test";

export class Login {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async submitLogin(page: Page, user: string, pswd: string) {
    await page.fill("//input[@name='user']", user);
    await page.fill("//input[@name='password']", pswd);
    await page.click("button >> text=sign in");
  }
}
