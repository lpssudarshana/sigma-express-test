const serverless =  require('serverless-http');
const express = require('express');

const app = express()

app.get('/user', function (req, res) {
    debugger;
  res.send('sigma express success --- user endpoint')
})

app.get('/product', function (req, res) {
    debugger;
  res.send('sigma express success --- product endpoint')
})

app.get('/sales', function (req, res) {
    debugger;
  res.send('sigma express success --- product endpoint')
})

let serverless_function = serverless(app);

exports.handler = function(event, context, callback) {
    debugger;
   return serverless_function(event, context, callback)
}


