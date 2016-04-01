module.exports = {
  entry: {
    app: './app/main.js'
  },
  output: {
    path: './app/',
    filename: './dist/main.js',
    publicPath: '/'
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['ng-annotate!babel']
      },
      {
        test: /\.html$/,
        exclude: /(node_modules|bower_components)/,
        loader: "raw"
      },
      {
        test: /\.(woff2?|svg)$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};
