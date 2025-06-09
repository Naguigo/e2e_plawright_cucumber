# e2e_playwright_cucumber

Framework de testes E2E utilizando **Playwright**, **Cucumber.js** e **TypeScript**, com arquitetura baseada em Page Object Model (POM) para testes automatizados robustos e legíveis.

---

## 🚀 Visão Geral

Este repositório tem como objetivo estruturar testes end-to-end de forma clara, reaproveitável e compatível com pipelines de CI/CD. Os cenários são escritos em linguagem natural (Gherkin), enquanto o Playwright executa ações reais nos navegadores.

---

## 📦 Tecnologias Utilizadas

- [Playwright](https://playwright.dev/)
- [Cucumber.js](https://cucumber.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)

---

## 📁 Estrutura de Pastas

e2e_playwright_cucumber/
├── features/ # Cenários escritos em Gherkin
├── step-definitions/ 
├── page-objects/ 
├── support/ 
├── report/
├── playwright.config.ts 
└── cucumber.js 



## ⚙️ Instalação

1. Clone o repositório:

bash
git clone https://github.com/Naguigo/e2e_playwright_cucumber.git
cd e2e_playwright_cucumber



## Instale as dependências
npm install


## Instale os navegadores do Playwright:
npx playwright install


# Executando os Testes

## Executar todos os testes com interface (modo não headless):
npm run test

## Executar abrindo o navegador
HEADLESS=false npm test


## Executar em modo headless (ideal para CI/CD):
npm run test:ci

## Executar cenários por tag:
npx cucumber-js --tags "@minha_tag"
