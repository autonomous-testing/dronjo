import { Page } from "@playwright/test";

export class Checkout {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async submitPaymentDetails(
    page: Page,
    cardNumberFirstFour: string,
    cardNumberSecondFour: string,
    cardNumberThirdFour: string,
    cardNumberLastFour: string,
    cardHolderName: string,
    expirationDate: string,
    cvc: string
  ) {
    await page.fill("#cardNumberFirstFour", cardNumberFirstFour);
    await page.fill("#cardNumberSecondFour", cardNumberSecondFour);
    await page.fill("#cardNumberThirdFour", cardNumberThirdFour);
    await page.fill("#cardNumberLastFour", cardNumberLastFour);

    await page.fill("#cardHolderName", cardHolderName);

    await page.fill("#expirationDate", expirationDate);
    await page.fill("#cvc", cvc);

    await page.click("button >> text=Purchase");
  }
}
