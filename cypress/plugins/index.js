// const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

// module.exports = (on, config) => {
//   addCucumberPreprocessorPlugin(on, config);

//   // You can configure your other plugins here

//   return config;
// };

const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
};

