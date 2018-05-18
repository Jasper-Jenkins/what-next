var router= require('express').Router()
var Posts =require('../models/post')

//get all
router.get('/api/posts', (req,res,next) =>{
  Posts.find({})
  .then(posts =>{
    res.status(200).send(posts)
  })
  .catch(err => {
    res.status(400).send(err)
  })
})

//add post

module.exports = {
  router
}