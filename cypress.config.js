const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
    viewportHeight: 768,
    viewportWidth: 1024,
    defaultCommandTimeout: 10000,
  },
});
