import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


Given('eu procuro pelo produto {string}', (searchName) => {
  cy.searchProductInCatalog(searchName).as('searchResponse');
});

Then('eu devo ver produtos com o nome {string} no catálogo', (searchName) => {
  cy.get('@searchResponse').then(response => {
    expect(response.status).to.equal(200);
    response.body.forEach(category => {
      category.products.forEach(product => {
        expect(product.productName).to.include(searchName);
      });
    });
  });
});

When('eu envio uma imagem para a API', () => {
  const imagePath = 'cypress/fixtures/images/teste.jpg';
  cy.uploadImage(imagePath).as('uploadResponse');
});

Then('eu devo ver uma resposta com status {int}', (statusCode) => {
  cy.get('@uploadResponse').then(response => {
    expect(response.status).to.eq(statusCode);
  });
});