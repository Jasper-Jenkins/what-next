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

router.get('/api/posts/:id',(req, res, next) =>{
  Posts.findById(req.params.id)
  .then(post=>{
    res.status(200).send(post)
  })
  .catch(err => {
    res.status(400).send(err)
  })
})

//add post  ********* change below
//create the post
router.post('/api/posts', (req, res, next) =>{
  var story = req.body
  Posts.create(story)
  .then(newStory =>{
    res.status(200).send(newStory)
  })
  .catch(err =>{
    res.status(400).send(err)
  })
})

//delete user
router.delete('/api/posts/:id', (req, res, next) =>{
  Posts.findByIdAndRemove(req.params.id)
    .then(data=>{
      res.send("Successfully Deleted")
    })
    .catch(err =>{
      res.status(400).send(err)
    })
})


module.exports = {
  router
}