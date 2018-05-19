var router= require('express').Router()
var Comments =require('../models/comment')

//get all
router.get('/api/comments', (req,res,next) =>{
  Comments.find({})
  .then(comments =>{
    res.status(200).send(comments)
  })
  .catch(err => {
    res.status(400).send(err)
  })
})

router.get('/api/comments/:id',(req, res, next) =>{
  Comments.find({postId: req.params.id})
  .then(comments=>{
    res.status(200).send(comments)
  })
  .catch(err => {
    res.status(400).send(err)
  })
})

//create the comment
router.post('/api/comments', (req, res, next) =>{
  var story = req.body
  Comments.create(story)
  .then(newStory =>{
    res.status(200).send(newStory)
  })
  .catch(err =>{
    res.status(400).send(err)
  })
})

//delete user
router.delete('/api/comments/:id', (req, res, next) =>{
  Comments.findByIdAndRemove(req.params.id)
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