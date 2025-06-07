import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { LoginPage } from '../pageObjects/LoginPage';
import { InventoryPage } from '../pageObjects/InventoryPage';
import assert from 'assert';

// Step: Acessa a página de login
Given('que acesso a página de login', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
});

// Step: Preenche usuário e senha
When('informo usuário {string} e senha {string}', async function (username: string, password: string) {
  await this.loginPage.fillUsername(username);
  await this.loginPage.fillPassword(password);
});

// Step: Clica no botão de login
When('clico em Login', async function () {
  await this.loginPage.submit();
  this.inventoryPage = new InventoryPage(this.page);
});


// Step: Verifica se chegou na página de inventário
Then('devo ser redirecionado para o inventário de produtos', async function () {
  const visible = await this.inventoryPage.isInventoryVisible();
  assert.strictEqual(visible, true, 'Inventário não está visível');
});