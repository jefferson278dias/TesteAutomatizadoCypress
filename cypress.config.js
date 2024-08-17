const { defineConfig } = require("cypress");

module.exports = defineConfig({

  // Define o tempo máximo de espera para comandos do Cypress (50 segundos)
  defaultCommandTimeout: 5000,

  // Define o tempo máximo para o carregamento de páginas (50 segundos)
  pageLoadTimeout: 5000,
  
  e2e: {
    // Configuração de eventos do Node.js durante a execução dos testes E2E
    setupNodeEvents(on, config) {
      // Implementar event listeners aqui, se necessário
    },
  },
  
});
