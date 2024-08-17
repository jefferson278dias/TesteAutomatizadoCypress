// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import '../support/login'
import '../support/locators'
import '../plugins/index'
import '../support/commands'
import '../fixtures/user.json'
import '..//e2e/1-getting-started/produtos.cy'
import '../e2e/1-getting-started/login.cy'
import '../support/produtos'
import '../e2e/1-getting-started/carrinho.cy'

beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    cy.acessarPagina();
})



// Alternatively you can use CommonJS syntax:
// require('./commands')