var webpack = require('webpack'),
    path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: "jQuery"
  },
  plugins: [
     new webpack.ProvidePlugin({
       $: "jquery",
       jQuery: "jquery"
     })
  ],
  output: {
    path: './',
    filename: './public/bundle.js'
  },
  resolve: {
    root: './',
    modulesDirectories: [
      'node_modules',
      './app/components',
      './app/actions',
      './app/reducers',
      './app/store'
    ],
    alias:{
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss/')
    ]
  }
};
