const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.feature$/,
        use: [
          {
            loader: 'cucumber-webpack',
            options: {
              // opções do loader, se necessário
            }
          }
        ],
        include: path.resolve(__dirname, 'cypress/e2e/features'),
      }
    ]
  }
};
