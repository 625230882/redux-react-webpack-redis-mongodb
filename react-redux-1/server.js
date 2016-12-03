var bodyParser = require("body-parser");
var express = require('express')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var configRoutes = require("./routes");
var multer = require("multer");
var multiparty = require('multiparty');
var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.set('redis', require("./redis-connection"));

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

configRoutes(app);

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎👿  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

app.get("/*", function(req, res) {
    res.sendFile(__dirname + '/index.html')
})