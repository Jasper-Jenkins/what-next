var express = require('express')
var bodyParser = require('body-parser')
var app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))


app.get('*', function logger(req, res, next) {
  console.log('Hey someone just left')
  res.status(404).send("<h1>404</h1>")
})

app.listen(3000)