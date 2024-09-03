const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://advantageonlineshopping.com/',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    specPattern: 'cypress/e2e/**/*.feature', // Certifique-se de que isso está correto
  },
});


// const { defineConfig } = require('cypress');
// const cucumber = require('cypress-cucumber-preprocessor').default;
// const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: 'https://advantageonlineshopping.com/',
//     setupNodeEvents(on, config) {
//       addCucumberPreprocessorPlugin(on, config);
//       on('file:preprocessor', cucumber(config));
//       return config;
//     },
//     specPattern: 'cypress/e2e/**/*.feature',
//   },
// });
