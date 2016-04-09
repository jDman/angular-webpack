ENV = process.env.npm_lifecycle_event;
isTest = ENV === 'test' || ENV === 'test-watch';
isProd = ENV === 'build';
//console.log('env ', ENV);

module.exports = {
  entry: isTest ? {}
    : { app: './app/main.js' },
  output: isTest ? {}
    : {
        path: './app/',
        filename: './dist/main.js',
        publicPath: '/'
      },
  devServer: {
    inline: true,
    port: 3333
  },
  devTool: isTest ? 'inline-source-map'
    : isProd ? 'source-map'
    : 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules || tests)/,
        loader: 'ng-annotate'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: 'es2015'
        }
      },
      {
        test: /\.html$/,
        exclude: /(node_modules)/,
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
    ],
    preloaders: isTest ? [
        {
          test: /\.js$/,
          exclude: [
            /node_modules/,
            /\.spec\.js$/
          ],
          loader: 'isparta-instrumenter'
        }
      ]
      : []
  }
};
