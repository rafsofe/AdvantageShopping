Feature: Procure por um produto

  Scenario: Validar pesquisa no catálogo
    Given eu procuro pelo produto "Bose"
    Then eu devo ver produtos com o nome "Bose" no catálogo
    

  Scenario: Deve enviar uma imagem para a API e validar a resposta
    When eu envio uma imagem para a API
    Then eu devo ver uma resposta com status 200
