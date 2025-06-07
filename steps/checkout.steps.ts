import { When, Then, Given } from '@cucumber/cucumber';
import { CartPage } from '../pageObjects/CartPage';
import { CheckoutPage } from '../pageObjects/CheckoutPage';
import assert from 'assert';

// Step: clica em Checkout
Given('clico em Checkout', async function () {
  this.cartPage = new CartPage(this.page);
  await this.cartPage.clickCheckout();
  this.checkoutPage = new CheckoutPage(this.page); // Instancia CheckoutPage para os próximos passos
});

// Step: preenche dados do formulário de checkout
When(
  'preencho os dados: primeiro nome {string}, sobrenome {string} e CEP {string}',
  async function (primeiroNome: string, sobrenome: string, cep: string) {
    await this.checkoutPage.fillForm(primeiroNome, sobrenome, cep);
  }
);

// Step: clica em Continue
When('clico em Continue', async function () {
  await this.checkoutPage.clickContinue();
});

// Step: clica em Finish
When('clico em Finish', async function () {
  await this.checkoutPage.clickFinish();
});

// Step: valida mensagem de confirmação
Then('devo ver a mensagem de confirmação {string}', async function (mensagem: string) {
  const msg = await this.checkoutPage.getConfirmationMessage();
  assert.strictEqual(msg, mensagem, 'Mensagem de confirmação não encontrada');
});