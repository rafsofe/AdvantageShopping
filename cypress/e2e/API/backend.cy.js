/// <reference types="cypress" />

describe('Procure por um produto', () => {

  it('Validar pesquisa no catálogo', () => {
    const searchName = 'Bose';

    cy.searchProductInCatalog(searchName)
      .then(response => {
        expect(response.status).to.equal(200);
        response.body.forEach(category => {
          category.products.forEach(product => {
            expect(product.productName).to.include(searchName);
          });
        });
      });
  });
});

describe('Atualize a imagem de um produto', () => {
  it('Deve enviar uma imagem para a API e validar a resposta', () => {
    const imagePath = 'cypress/fixtures/images/teste.jpg';

    cy.uploadImage(imagePath).then((response) => {
      // Logar o corpo da resposta para depuração
      cy.log('Resposta da API:', JSON.stringify(response.body));
      
      // Verificar o status da resposta
      expect(response.status).to.eq(200);
    });
  });
});