import { Page } from 'playwright';

// Page Object da página de login do site
export class LoginPage {
    readonly page: Page;
    constructor(page: Page) {
      this.page = page;
    }
  // Método para navegar até a URL inicial (página de login)
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // Método para preencher o campo de usuário
  async fillUsername(username: string) {
    await this.page.fill('#user-name', username);
  }

  // Método para preencher o campo de senha
  async fillPassword(password: string) {
    await this.page.fill('#password', password);
  }

  // Método para clicar no botão de login
  async submit() {
    await this.page.click('#login-button');
  }
}