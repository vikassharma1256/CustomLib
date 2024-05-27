

// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'customlib',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'babel-loader', // Transpile JavaScript and JSX files
          'css-loader',
          'source-map-loader',
          'sass-loader'
          
        ],
        options: { presets: ['@babel/env','@babel/preset-react'] },
      },
    ],
  },
};