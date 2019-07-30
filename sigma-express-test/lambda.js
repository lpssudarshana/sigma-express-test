const serverless =  require('serverless-http');
const express = require('express');

const app = express()

app.get('/', function (req, res) {
  res.send('sigma express success')
})

exports.handler = function(event, context, callback) {
    
    event = serverless(app);
}


