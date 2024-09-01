/// <reference types="cypress" />
import locators from '../../support/locators';

beforeEach(() => {
    cy.visit('/');
    cy.viewport(1280, 1024);
});

describe('Validar a página Advantage Online Shopping', () => {

    it('Acessar a home e verificar o logo', () => {
        cy.get(locators.logo).should('be.visible');
    });

    it('Realize a busca de um produto', () => {
        cy.fixture('products').then((data) => {
            const products = data.produtos_3;

            products.forEach(nameProduct => {
                cy.searchProduct(nameProduct);
            });
        });
    });

    it('Incluir produto no carrinho', () => {
        cy.fixture('products').then((data) => {
            const products = data.produtos_3;

            products.forEach(nameProduct => {
                cy.addCart(nameProduct);
            });
        });
    });

    it('Validar os produtos incluídos no carrinho na tela de pagamento', () => {
        cy.fixture('products').then((data) => {
            const products = data.produtos_3;

            products.forEach(nameProduct => {
                cy.addCart(nameProduct);
            });

            cy.get(locators.shoppingCartLink).click();
            cy.wait(2000);

            products.forEach(nameProduct => {
                cy.contains(locators.cartProduct, nameProduct).should('be.visible');
            });
        });
    });
});