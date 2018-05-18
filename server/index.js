var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var cors = require('cors')

//register middlewear
app.use(cors())
require('./serverAssets/db/mlab-config')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

//routes
var posts = require('./serverAssets/routes/posts')
var users = require('./serverAssets/routes/users')
var comments = require('./serverAssets/routes/comments')
var subcomments = require('./serverAssets/routes/subcomments')


app.use(posts.router)
app.use(users.router)
app.use(comments.router)
app.use(subcomments.router)


//catch all
app.get('*', function logger(req, res, next) {
  console.log('Hey someone just left')
  res.status(404).send("<h1>404</h1>")
})

app.listen(3000)