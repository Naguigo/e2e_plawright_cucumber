import { Page } from 'playwright';

// PageObject para o processo de checkout
export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Preenche o formulário de checkout
  async fillForm(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('[data-test="firstName"]', firstName);
    await this.page.fill('[data-test="lastName"]', lastName);
    await this.page.fill('[data-test="postalCode"]', postalCode);
  }

  // Clica no botão Continue
  async clickContinue() {
    await this.page.click('[data-test="continue"]');
  }

  // Clica no botão Finish
  async clickFinish() {
    await this.page.click('[data-test="finish"]');
  }

  // Retorna a mensagem de confirmação do checkout, ou string vazia se não encontrar
    async getConfirmationMessage(): Promise<string> {
    const msg = await this.page.textContent('.complete-header');
    return msg ?? '';
  }
}