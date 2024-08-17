import loc from '../support/locators';

Cypress.Commands.add('testeProdutoVisível', () => {
    
    cy.get(loc.PRODUTOS.Imagem).should('be.visible')
    
});
Cypress.Commands.add('testePrecoVisível', () => {
    
    cy.get(loc.PRODUTOS.Preco).should('be.visible')
    
});
Cypress.Commands.add('testeBotaoCarrinho', () => {
    
    cy.get(loc.PRODUTOS.BotaoCarrinho).should('be.visible')
    
});