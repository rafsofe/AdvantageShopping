import locators from './locators';

Cypress.Commands.add('searchProduct', (nameProduct) => {
    cy.get(locators.searchInput).click();
    cy.get(locators.autoComplete, { timeout: 10000 }).click();
    cy.get(locators.autoComplete).type(`${nameProduct}{enter}`);
    cy.wait(5000);
    cy.get(locators.productName).click();
});

Cypress.Commands.add('addCart', (nameProduct) => {
    cy.get(locators.searchInput).click();
    cy.get(locators.autoComplete, { timeout: 10000 }).click();
    cy.get(locators.autoComplete).type(`${nameProduct}{enter}`);
    cy.get(locators.productName).should('be.visible');
    cy.wait(5000);
    cy.get(locators.productName).click();
    cy.get(locators.addToCartButton).click();
});