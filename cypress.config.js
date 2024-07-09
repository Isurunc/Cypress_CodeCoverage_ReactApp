const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
    specPattern: 'cypress/tests/**/*.ts',
    supportFile: 'cypress/support/e2e.ts',
  },
  env: {
    isInteractive: true,
  },
  
});

