var router= require('express').Router()
var Users =require('../models/user')
//get all users
// router.get('/api/users', (req,res,next) =>{
//   Users.find({})
//   .then(users =>{
//     res.status(200).send(users)
//   })
//   .catch(err => {
//     res.status(400).send(err)
//   })
// })

//get by Id
router.get('/api/users/:id', (req,res, next)=>{
  Users.findById(req.params.id)
  .then(user =>{
    res.status(200).send(user)
  })
  .catch(err => {
    res.status(400).send(err)
  })
})
//get by name
router.get('/api/users/:name', (req,res, next)=>{
  Users.findById(req.params.name)
  .then(user =>{
    res.status(200).send(user)
  })
  .catch(err => {
    res.status(400).send(err)
  })
})

//create user
router.post('/api/users', (req, res, next) =>{
  var user = req.body
  Users.create(user)
  .then(newUser =>{
    res.status(200).send(newUser)
  })
  .catch(err =>{
    res.status(400).send(err)
  })
})

//login
router.post('/api/login', (req, res, next) =>{
Users.findOne(req.body)
  .then(user =>{
    res.status(200).send(user)
  })
  .catch(err =>{
    res.status(400).send(err)
  })
})

//delete user
router.delete('/api/users/:id', (req, res, next) =>{
  Users.findByIdAndRemove(req.params.id)
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