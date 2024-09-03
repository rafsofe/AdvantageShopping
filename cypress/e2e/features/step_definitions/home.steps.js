import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../../support/pageObjects/advantagePage';
import locators from '../../../support/locators';

Given('que eu acesse a página inicial', () => {
  HomePage.visit();
});

Then('eu devo ver o logo', () => {
  HomePage.verifyLogo();
});

When('eu busco pelos produtos', () => {
  cy.fixture('products').then((data) => {
    const products = data.produtos_2;
    products.forEach(nameProduct => {
      HomePage.searchProduct(nameProduct);
      HomePage.verifyProductVisibility(nameProduct);
    });
  });
});

When('eu adiciono produtos ao carrinho', () => {
  cy.fixture('products').then((data) => {
    const products = data.produtos_1;
    products.forEach(nameProduct => {
      HomePage.addProductToCart(nameProduct);
    });
  });
});

When('eu vou para a tela de pagamento', () => {
  HomePage.goToShoppingCart();
});

Then('os produtos devem estar no carrinho', () => {
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

Then('eu devo ver os produtos no carrinho', () => {
  cy.fixture('products').then((data) => {
    const products = data.produtos_2;
    products.forEach(nameProduct => {
      HomePage.verifyProductInCart(nameProduct);
    });
  });
});
