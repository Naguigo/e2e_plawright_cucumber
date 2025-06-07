@checkout
Feature: Checkout de produto

    @login @addProduto
  Scenario: Usuário realiza o checkout com sucesso
    Given clico em Checkout
    When preencho os dados: primeiro nome "João", sobrenome "Silva" e CEP "12345"
    And clico em Continue
    And clico em Finish
    Then devo ver a mensagem de confirmação "Thank you for your order!"