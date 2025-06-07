import { When, Then } from '@cucumber/cucumber';
import { InventoryPage } from '../pageObjects/InventoryPage';
import { CartPage } from '../pageObjects/CartPage';
import assert from 'assert';

// Step: adiciona produto ao carrinho pelo nome
When('seleciono o produto {string} e adiciono ao carrinho', async function (produto: string) {
  this.inventoryPage = new InventoryPage(this.page);
  await this.inventoryPage.addProductToCart(produto);
});

// Step: acessa o carrinho
When('clico no ícone do carrinho', async function () {
  await this.inventoryPage.goToCart();
  this.cartPage = new CartPage(this.page);
});

// Step: valida se produto está no carrinho
Then('devo ver o produto {string} no carrinho', async function (produto: string) {
  const exists = await this.cartPage.isProductInCart(produto);
  assert.strictEqual(exists, true, `Produto ${produto} não está no carrinho`);
});