/// <reference types="cypress" />

context.only('Teste referente a produto', () => {
  beforeEach(() => {
       
    cy.loginComSucesso();

   })


  it('venda de produto', (logado) => {
    cy.fixture('user.json').then((dados) => {
      cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
      cy.get('#shopping_cart_container > a > svg > path').click()
      cy.get('.btn_action').click({ force: true })
      cy.get('[data-test="firstName"]').type(dados.nome)
      cy.get('[data-test="lastName"]').type('teste')
      cy.get('[data-test="postalCode"]').type('123456789')
      cy.get('.btn_primary').click()
      cy.get('.btn_action').click()
      cy.wait(2000);  // Aguarda 2 segundos
      cy.get('img.pony_express').should('be.visible');

      //cy.get('.pony_express').should('be.visible', { force: true });


      
      
    })
  })

})

