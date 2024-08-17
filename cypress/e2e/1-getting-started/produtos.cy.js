/// <reference types="cypress" />

context('Teste referente a produto', () => {
    beforeEach(() => {
     
        cy.loginComSucesso();
     
    })

          // verificando produto visível na página:
    it('Produto visível', () => {
     
        'Dado que estou na página de produtos'
        'Quando eu verifico o produto'
        'Então o produto deve estar visível na página'
             
        cy.testeProdutoVisível();
    })
        //Verificando se o preço visível:
    it('verificando preço', () => {
        
        'Dado que estou na página de produtos'
        'Quando eu verifico o preço do primeiro produto na lista'
        'Então o preço do produto deve estar visível'
        
        cy.testePrecoVisível();
    })
            //Verificando se o botão adicionar carrinho:
    it('verificando botao de adicionar carrinho', () => {
                
        'Dado que estou na página de produtos'
        'Quando eu verifico o botão de adicionar ao carrinho para o primeiro produto na lista'
        'Então o botão de adicionar ao carrinho deve estar visível'   

        cy.testeBotaoCarrinho();
    })
})
