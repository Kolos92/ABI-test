
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://front.serverest.dev/login",

    env: {
      apiUrl: "https://serverest.dev"
    },

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // Configuração de eventos do Cypress
    }
  }
});
