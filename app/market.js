//get market details

const bittrexController = require('./config/bittrex.js')

bittrexController.getmarketsummaries( function( data, err ) {
  console.log( data )
})
