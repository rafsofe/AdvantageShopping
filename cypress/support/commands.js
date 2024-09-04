Cypress.Commands.add('searchProductInCatalog', (searchName) => {
    cy.request({
        url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search',
        method: 'GET',
        qs: { name: searchName },
        failOnStatusCode: false
    }).then(response => { return response })
});


Cypress.Commands.add('uploadImage', (imagePath) => {
  // Ler o arquivo da imagem em base64
  return cy.readFile(imagePath, 'base64').then((fileContent) => {
    // Converter a base64 para Blob
    const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg');
    const formData = new FormData();
    formData.append('file', blob, 'teste.jpg');

    // Enviar a solicitação POST e retornar a resposta
    return cy.request({
      method: 'POST',
      url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/561266923/77/414141?product_id=13',
      headers: {
        'Authorization': 'Basic UmFmYWVsX3Rlc3RlXzAxOkFiMTIzNDU2Nzg=',
        'accept': '*/*',
      },
      body: formData,
      failOnStatusCode: false,
    });
  });
});

