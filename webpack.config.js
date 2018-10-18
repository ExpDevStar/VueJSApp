const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const _entry = {
  'index': ['./resources/assets/js/app.js', './resources/assets/scss/app.scss']
}

const _module = {
  rules: [{
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader'
      },
      {
        loader: 'sass-loader'
      }
    ]
  }]
}
module.exports = {
  // This is the "main" file which should include all other modules
  mode: 'development',
  entry: _entry,
  // Where should the compiled file go?
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public/js')
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: _module,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/style.css'
    })

  ]
}
