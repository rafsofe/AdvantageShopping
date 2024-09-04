import locators from '../locators';

class HomePage {
    visit() {
        cy.visit('/');
        cy.viewport(1280, 1024);
    }

    verifyLogo() {
        cy.get(locators.logo).should('be.visible');
    }

    searchProduct(nameProduct) {
        cy.get(locators.searchInput).click();
        cy.get(locators.autoComplete, { timeout: 10000 }).click();
        cy.get(locators.autoComplete).type(`${nameProduct}{enter}`);
        cy.wait(2000);
        cy.get(locators.autoComplete).clear();
    }

    verifyProductVisibility(nameProduct) {
        // Adicionamos um método para validar a visibilidade do produto
        cy.get(locators.locProductName, { timeout: 10000 })
            .should('be.visible')
            .and('contain.text', nameProduct);
    }

    addProductToCart(nameProduct) {
        this.searchProduct(nameProduct);
        cy.wait(2000);
        cy.get(locators.locProductName).click();
        cy.get(locators.addToCartButton).click();
        cy.wait(2000);
    }

    goToShoppingCart() {
        cy.get(locators.shoppingCartLink).click();
        cy.wait(2000);
    }

    verifyProductInCart(nameProduct) {
        cy.get(locators.cartProduct, { timeout: 10000 })
            .should('be.visible')
            .invoke('text')
            .then(text => {
                // Limpa e normaliza o texto extraído do DOM
                const normalizedText = text
                    .replace(/\s+/g, ' ')        // Substitui múltiplos espaços por um único espaço
                    .trim()                      // Remove espaços do início e fim
                    .toLowerCase();              // Converte para minúsculas

                // Normaliza o texto esperado
                const normalizedNameProduct = nameProduct
                    .toLowerCase();              // Converte para minúsculas

                // Verifica se o texto normalizado contém o texto esperado
                expect(normalizedText).to.include(normalizedNameProduct);
            });
    }
}

export default new HomePage();
