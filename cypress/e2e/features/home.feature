Feature: Página Advantage Online Shopping

  Scenario: Acessar a home e verificar o logo
    Given que eu acesse a página inicial
    Then eu devo ver o logo

  Scenario: Realizar a busca de um produto
    Given que eu acesse a página inicial
    When eu busco pelos produtos
    Then eu devo ver os produtos na lista

  Scenario: Incluir produto no carrinho
    Given que eu acesse a página inicial
    When eu adiciono produtos ao carrinho
    Then os produtos devem estar no carrinho

  Scenario: Validar os produtos incluídos no carrinho na tela de pagamento
    Given que eu acesse a página inicial
    When eu adiciono produtos ao carrinho
    And eu vou para a tela de pagamento
    Then eu devo ver os produtos no carrinho
