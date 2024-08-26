const { defineConfig } = require('cypress');
const path = require('path');

module.exports = defineConfig({
  projectId: "q6f6ke",
  e2e: {
    baseUrl: 'https://manifestmovies.com/',
    setupNodeEvents(on, config) {
      // Implement node event listeners here

    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true, 
      json: true,
    },
    env: {
      env: 'production', // Default environment
    },
    specPattern: 'cypress/e2e/**/*.cy.js',
    videosFolder: 'cypress/videos',
    viewportWidth: 1519.2,
    viewportHeight: 677,
    screenshotsFolder: 'cypress/screenshots',
    retries: {
      runMode: 2,
      openMode: 1
    },
    video: true,
  },
});
