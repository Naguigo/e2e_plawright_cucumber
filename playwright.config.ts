import { defineConfig } from '@playwright/test';

// Configurações globais do Playwright
export default defineConfig({
  use: {
    headless: true,                          // Executa sem interface gráfica
    screenshot: 'only-on-failure',           // Tira screenshot só em falhas
    video: 'retain-on-failure',              // Grava vídeo só em falhas
    baseURL: 'https://www.saucedemo.com/v1/',// URL base dos testes
  },
  reporter: [['html', { outputFolder: 'reports', open: 'never' }]], // Relatório HTML
});