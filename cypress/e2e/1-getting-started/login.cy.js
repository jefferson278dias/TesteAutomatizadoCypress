/// <reference types="cypress" />

context('Teste referente à parte de login', () => {

    beforeEach(() => {
        // Acessa a página de login antes de cada teste
        cy.acessarPagina();
    });

    it('Login com usuário válido', () => {
        // Carrega os dados do usuário a partir do JSON e realiza o login
        'Dado que eu estou na página de login'
        'Quando eu insiro o nome de usuário  e a senha '
        'Então eu devo ver a mensagem de confirmação visível'

        cy.loginComSucesso();
        
    });

    it('Login com usuário bloqueado', () => {
        // Realiza o teste com usuário bloqueado 
        'Dado que eu estou na página de login'
        'Quando eu insiro o nome de usuário bloqueado e a senha'
        'Então eu devo ver a mensagem de erro visível'

        cy.loginUsuarioBloqueado();
    });

    it('Login com usuário inválido', () => {
        // Realiza o teste com usuário inválido
        'Dado que eu estou na página de login'
        'Quando eu insiro o nome de usuário inválido e a senha'
        'Então eu devo ver a mensagem de erro visível'
        
        cy.loginUsuarioRuim();
    });
});
