import { expect } from "@playwright/test";
import { test } from "@playwright/test";
// import { test } from "../wopee/assist";

import { cards } from "../data/cards";
import { Login } from "../pages/dronjoLogin";
import { Checkout } from "../pages/dronjoCheckout";

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(baseURL);
});

test("Login - correct", async ({ page }) => {
  await page.locator("text=Sign in").click();

  const login = new Login(page);
  await login.submitLogin(page, "marcel.veselka@tesena.com", "admin");

  await expect(page.locator("text=Log out >> visible=true")).toBeVisible();
});

test("Login - incorrect", async ({ page }) => {
  await page.locator("text=Sign in").click();

  const login = new Login(page);
  await login.submitLogin(page, "marcel.veselka@gmail.com", "admin");

  await expect(
    page.locator("button >> text=Sign in >> visible=true")
  ).toBeVisible();
});

test("Gallery page", async ({ page }) => {
  await page.locator("text=Gallery").click();

  await expect(page).toHaveTitle(/Gallery.*/);
  await expect(page.locator(".gallery >> img")).toHaveCount(3);
});

test("Check out", async ({ page }) => {
  await page.locator(".btn-main-md >> text=Buy Now").click();

  const validCard = cards.validCard;

  const login = new Checkout(page);
  await login.submitPaymentDetails(
    page,
    validCard.first,
    validCard.second,
    validCard.third,
    validCard.last,
    validCard.name,
    validCard.expDate,
    validCard.cvc
  );

  expect(await page.innerText(".confirmation")).toContain(
    "Thank you for your order!"
  );
});
