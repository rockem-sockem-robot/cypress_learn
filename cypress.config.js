const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 70_000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
