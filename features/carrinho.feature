@addcarrinho_feature @login 
Feature: Carrinho de compras

  
  Scenario: Usuário adiciona produto ao carrinho
    When seleciono o produto "Sauce Labs Backpack" e adiciono ao carrinho
    And clico no ícone do carrinho
    Then devo ver o produto "Sauce Labs Backpack" no carrinho