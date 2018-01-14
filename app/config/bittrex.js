const bittrex = require('node-bittrex-api')

bittrex.options({
  'apikey' : API_KEY,
  'apisecret' : API_SECRET,
});

const bittrexController = module.exports = bittrex
