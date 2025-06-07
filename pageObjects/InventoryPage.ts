import { Page } from 'playwright';

// PageObject para a página do inventário de produtos
export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Verifica se a lista de inventário está visível
  async isInventoryVisible(): Promise<boolean> {
    return this.page.isVisible('.inventory_list');
  }

  // Adiciona um produto ao carrinho pelo nome
  async addProductToCart(productName: string) {
    const productSelector = `//div[text()="${productName}"]/ancestor::div[@class='inventory_item']//button[contains(text(),'Add')]`;
    await this.page.click(productSelector);
  }

  // Clica no ícone do carrinho
  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}