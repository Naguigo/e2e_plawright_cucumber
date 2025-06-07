import { Page } from 'playwright';

// PageObject para o carrinho de compras
export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Verifica se um produto está presente no carrinho
  async isProductInCart(productName: string): Promise<boolean> {
    const selector = `//div[@class='inventory_item_name' and text()='${productName}']`;
    return this.page.isVisible(selector);
  }

  // Clica no botão de checkout
  async clickCheckout() {
    await this.page.click('[data-test="checkout"]');
  }
}