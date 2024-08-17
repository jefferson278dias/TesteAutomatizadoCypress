
import loc from '../support/locators';

// Comando para acessar a página de login
Cypress.Commands.add('acessarPagina', () => {   
    
    cy.visit('https://www.saucedemo.com/v1/index.html');
    
})

// Comando para login com sucesso
Cypress.Commands.add('loginComSucesso', (logado) => {
    cy.fixture('user.json').then((dados) => {
        cy.get(loc.LOGIN.User).type(dados.nome);
        cy.get(loc.LOGIN.Password).type(dados.senha);
        cy.get(loc.LOGIN.BotaoEntrar).click();
        cy.get(loc.MENSAGEM.Confirmacao).should('be.visible');
    });
});

// Comando para testar usuário bloqueado
Cypress.Commands.add('loginUsuarioBloqueado', () => {
    cy.get(loc.LOGIN.User).type('locked_out_user');
    cy.get(loc.LOGIN.Password).type('secret_sauce');
    cy.get(loc.LOGIN.BotaoEntrar).click();
    cy.get(loc.MENSAGEM.Erro).should('be.visible');
});
// comando para teste usuario invalido
Cypress.Commands.add('loginUsuarioRuim', () => {
    cy.get(loc.LOGIN.User).type('21616');
    cy.get(loc.LOGIN.Password).type('secret_sauce');
    cy.get(loc.LOGIN.BotaoEntrar).click();
    cy.get(loc.MENSAGEM.Erro).should('be.visible');
})
