
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://front.serverest.dev/login",

    env: {
      apiUrl: "https://serverest.dev"
    },

    setupNodeEvents(on, config) {
      // Configuração de eventos do Cypress
    }
  }
});
