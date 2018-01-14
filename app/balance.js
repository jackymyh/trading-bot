//get account balances

const bittrexController = require('./config/bittrex.js');

bittrexController.getbalances( function( data, err ) {
  console.log( data );
});
