import HomePage from '../../support/pageObjects/advantagePage';
import locators from '../../support/locators';

beforeEach(() => {
  HomePage.visit();
});

describe('Validar a página Advantage Online Shopping', () => {

  it('Acessar a home e verificar o logo', () => {
    HomePage.verifyLogo();
  });

  it('Realize a busca de um produto', () => {
    cy.fixture('products').then((data) => {
      const products = data.produtos_2;
      products.forEach(nameProduct => {
        HomePage.searchProduct(nameProduct);
        HomePage.verifyProductVisibility(nameProduct);

        //cy.get('.productName').should('be.visible').and('contain.text', nameProduct);
      });
    });
  });

  it('Incluir produto no carrinho', () => {
    cy.fixture('products').then((data) => {
      const products = data.produtos_1;
      products.forEach(nameProduct => {
        HomePage.addProductToCart(nameProduct);
      });
    });
  });

  it('Validar os produtos incluídos no carrinho na tela de pagamento', () => {
    cy.fixture('products').then((data) => {
      const products = data.produtos_2;
      products.forEach(nameProduct => {
        HomePage.addProductToCart(nameProduct);
      });
      HomePage.goToShoppingCart();
      products.forEach(nameProduct => {
        HomePage.verifyProductInCart(nameProduct);
      });
    });
  });
});
