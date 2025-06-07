@addcarrinho_feature
Feature: Carrinho de compras

  @login 
  Scenario: Usuário adiciona produto ao carrinho
    When seleciono o produto "Sauce Labs Backpack" e adiciono ao carrinho
    And clico no ícone do carrinho
    Then devo ver o produto "Sauce Labs Backpack" no carrinho