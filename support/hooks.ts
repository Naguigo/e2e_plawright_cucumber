import { Before, After, setDefaultTimeout, setWorldConstructor, World, Status } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import fs from 'fs';
import path from 'path';

// Timeout global
setDefaultTimeout(20000);

class CustomWorld extends World {
  browser!: Browser;
  page!: Page;
}
setWorldConstructor(CustomWorld);

Before(async function (this: CustomWorld) {
  const headless = process.env.HEADLESS !== 'false';
  this.browser = await chromium.launch({ headless });
  this.page = await this.browser.newPage();
});

// Screenshot em caso de falha
After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED && this.page) {
    const screenshotPath = path.resolve(
      'screenshots',
      `${scenario.pickle.name.replace(/[^a-zA-Z0-9]/g, '_')}_${Date.now()}.png`
    );
    await fs.promises.mkdir(path.dirname(screenshotPath), { recursive: true });
    await this.page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Screenshot salvo em: ${screenshotPath}`);
  }

  if (this.page) await this.page.close();
  if (this.browser) await this.browser.close();
});