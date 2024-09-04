// const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

// module.exports = (on, config) => {
//   addCucumberPreprocessorPlugin(on, config);

//   // You can configure your other plugins here

//   return config;
// };

module.exports = (on, config) => {

  on('file:preprocessor', cucumber());

};

