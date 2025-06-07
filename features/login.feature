@login_feature
Feature: Login de usuário

  Scenario: Usuário faz login com sucesso
    Given que acesso a página de login
    When informo usuário "standard_user" e senha "secret_sauce"
    And clico em Login
    Then devo ser redirecionado para o inventário de produtos