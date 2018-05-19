var router= require('express').Router()
var Subcomments =require('../models/subcomment')

//get all
router.get('/api/subcomments', (req,res,next) =>{
  Subcomments.find({})
  .then(subcomments =>{
    res.status(200).send(subcomments)
  })
  .catch(err => {
    res.status(400).send(err)
  })
})

router.get('/api/subcomments/:commentId',(req, res, next) =>{
  Subcomments.find({commentId: req.params.commentId})
  .then(subcomment=>{
    res.status(200).send(subcomment)
  })
  .catch(err => {
    res.status(400).send(err)
  })
})

//create the subcomment
router.post('/api/subcomments', (req, res, next) =>{
  var story = req.body
  Subcomments.create(story)
  .then(newStory =>{
    res.status(200).send(newStory)
  })
  .catch(err =>{
    res.status(400).send(err)
  })
})

//edit the subcomment....this needs to be revisited
// router.put('/api/subcomments/:id',(req, res, next) =>{
//   Subcomments.findByIdAndUpdate(req.params.id, req.body, {new: true})
//   .then(subcomment=>{
//     res.status(200).send(subcomment)
//   })
//   .catch(err => {
//     res.status(400).send(err)
//   })
// })

//delete user
router.delete('/api/subcomments/:id', (req, res, next) =>{
  Subcomments.findByIdAndRemove(req.params.id)
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