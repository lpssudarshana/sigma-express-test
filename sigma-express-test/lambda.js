const serverless =  require('serverless-http');
const express = require('express');

const app = express()

app.get('/', function (req, res) {
  res.send('sigma express success')
})

let serverless_function = serverless(app);

exports.handler = function(event, context, callback) {
    
    serverless_function(event, context, callback)
}


