var elixir = require('coldbox-elixir')

elixir(function (mix) {
  mix.webpack('app.js', 'public/js/index.js')
})
