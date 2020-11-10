// for path of properties in this document
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // file dote entry for analyse of code
  // this import in file beacame dependency of file
  entry: {
    main: path.join(__dirname, 'src/index.ts'),
  },
  // file and folder build exit
  // create bundle whith name of entry (main)
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  // loader divers of dependency tree
  // loader of divers format files
  module: {
    rules: [
      {
        test: /\.ts/,
        exclude: /(node_modules)/,
        use: ['ts-loader'],
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  // plugin divers
  // here run this assets (img, movie, ...)
  // this create file html with bundle of files generate
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
    }),
  ],
  // dev server
  stats: 'minimal',
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    open: false,
    contentBase: './dist',
    inline: true,
    port: 5000,
  },
};
