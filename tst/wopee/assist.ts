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

let test;

if (process.env.VRT_API_KEY) {
  config.apiKey = process.env.VRT_API_KEY;
}

if (process.env.WOPEE === "1") {
  test = base.extend<{}, TestFixtures>({
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
} else {
  test = base;
}

export default test;
