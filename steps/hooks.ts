import { Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { LoginPage } from '../pageObjects/LoginPage';
import { InventoryPage } from '../pageObjects/InventoryPage';
import { CartPage } from '../pageObjects/CartPage';

let browser: Browser;
let page: Page;

Before(async function () {
  browser = await chromium.launch({
    headless: process.env.HEADLESS !== 'false', // Isso permite ver o navegador se HEADLESS=false
  });
  page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  // PAUSE para debug se variável de ambiente PAUSE=true
  if (process.env.PAUSE === 'true' && this.page) {
    await this.page.pause(); // Vai abrir o painel interativo do Playwright
  }
  await this.browser?.close();
});

Before({ tags: '@login' }, async function () {
  const loginPage = new LoginPage(this.page);
  await loginPage.goto();
  await loginPage.fillUsername('standard_user');
  await loginPage.fillPassword('secret_sauce');
  await loginPage.submit();
});

// NOVO: Hook para adicionar produto ao carrinho
Before({ tags: '@addProduto' }, async function () {
  const inventoryPage = new InventoryPage(this.page);
  await inventoryPage.addProductToCart('Sauce Labs Backpack');
  const cartPage = new CartPage(this.page);
  await this.page.click('.shopping_cart_link');
});