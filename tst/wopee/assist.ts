import fs from "fs";
import yaml from "js-yaml";
import { test as base } from "@playwright/test";
import {
  Config,
  PlaywrightVisualRegressionTracker,
} from "@visual-regression-tracker/agent-playwright";

const config: Config = yaml.load(fs.readFileSync("wopee.yaml", "utf8"));

type TestFixtures = {
  wopee: PlaywrightVisualRegressionTracker;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<{}, TestFixtures>({
  wopee: [
    async ({ browserName }, use) => {
      await use(new PlaywrightVisualRegressionTracker(browserName, config));
    },
    { scope: "worker" },
  ],
});

test.beforeAll(async ({ wopee }) => {
  await wopee.start();
});

test.afterEach(async ({ page, wopee }, testInfo) => {
  await page.waitForTimeout(1000);
  await wopee.trackPage(page, testInfo.title, {
    diffTollerancePercent: config.diffTollerancePercent,
  });
});

test.afterAll(async ({ wopee }) => {
  await wopee.stop();
});
