import { setWorldConstructor, Before, After, World, Status } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;
}

setWorldConstructor(CustomWorld);

Before(async function (this: CustomWorld) {
  const headless = process.env.HEADLESS !== 'false';
  this.browser = await chromium.launch({ headless });
  this.page = await this.browser.newPage();
  console.log('Before global: page criado?', !!this.page);
});

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED && this.page) {
    await this.page.screenshot({ path: `screenshot-${Date.now()}.png`, fullPage: true });
  }
  if (this.page) await this.page.close();
  if (this.browser) await this.browser.close();
});