// steps/hooks.ts
import { Before } from '@cucumber/cucumber';
import { LoginPage } from '../pageObjects/LoginPage';
import { InventoryPage } from '../pageObjects/InventoryPage';
import { CartPage } from '../pageObjects/CartPage';
import { CustomWorld } from '../support/hooks';

Before({ tags: '@login' }, async function (this: CustomWorld) {
  console.log('@login Before: page existe?', !!this.page); // Deve ser TRUE
  if (!this.page) throw new Error('this.page não foi inicializada!');
  const loginPage = new LoginPage(this.page);
  await loginPage.goto();
  await loginPage.fillUsername('standard_user');
  await loginPage.fillPassword('secret_sauce');
  await loginPage.submit();
});

Before({ tags: '@addProduto' }, async function (this: CustomWorld) {
  const inventoryPage = new InventoryPage(this.page);
  await inventoryPage.addProductToCart('Sauce Labs Backpack');
  // Opcional: ir para o carrinho
  const cartPage = new CartPage(this.page);
  await this.page.click('.shopping_cart_link');
});