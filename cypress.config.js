// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: 'https://advantageonlineshopping.com/',
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

// const { defineConfig } = require('cypress');
// const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: 'https://advantageonlineshopping.com/',
//     setupNodeEvents(on, config) {
//       addCucumberPreprocessorPlugin(on, config);

//       // You can configure your other plugins here

//       return config;
//     },
//     specPattern: 'cypress/e2e/**/*.feature',
//     // other configurations
//   },
// });

// const { defineConfig } = require('cypress');
// const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
// const cucumber = require('@badeball/cypress-cucumber-preprocessor').default;

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       const bundler = createBundler();
      
//       on('file:preprocessor', bundler);
//       on('file:preprocessor', cucumber());
//     },
//     specPattern: 'cypress/e2e/**/*.feature',
//   },
// });

const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configure the Cucumber preprocessor
      addCucumberPreprocessorPlugin(on, config);

      // Configure the bundler
      const bundler = createBundler();
      on('file:preprocessor', bundler);

      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
  },
});



