Feature: Busca e Adição de Produtos ao Carrinho

Background:
  Given que estou na home do site
  And tenho uma lista de produtos para testar

Scenario: Realizar a busca de um produto que não existe
  When buscar por "Produto Inexistente"
  Then validar a mensagem “No results”


Scenario Outline: Realizar a busca de um produto
  When buscar o produto "<Produto>"
  Then validar o produto "<produto>" no resultado da busca

Examples:
| Produto                    |
| HP ELITEPAD 1000 G2 TABLET |
| HP ELITE X2 1011 G1 TABLET |
| BEATS STUDIO 2 OVER-EAR    |
