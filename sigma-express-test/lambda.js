const serverless =  require('serverless-http');
const express = require('express');

const app = express()

app.get('/user', function (req, res) {
    debugger;
  res.send('sigma express success')
})

let serverless_function = serverless(app);

exports.handler = function(event, context, callback) {
    debugger;
    callback(null, "success")
    serverless_function(event, context, callback)
}


