const express = require('express');
const users = require('../models/users');

const app = express.Router();

app
  .get('/', (req, res, next) => {
    users.getUsers()
    .then(x=>res.status(200).send(x))
    .catch(next);
  })
  .get('/friends/:userId', (req, res, next) => {
    users.getUserById(+req.params.userId)
    .then((x)=>users.getFriends(x?.friends)
    
    .then((y)=>res.status(200).send(y)))
    .catch(next);
  })
  .post('/login', (req, res,next) => {
    users.getUser(req.body.username, req.body.password)
    .then((x)=> {
    if(x){
      res.status(200).send(x)
    }else{
      res.status(200).send({})
    }})
    .catch(next);
  })
  .post('/', (req,res,next) => {
    users.addUser(req.body.user)
    .then((x)=>res.status(200).send(x))
    .catch(next);
  })
  .patch('/',(req,res,next) => {
    users.editUser(req.body.user)
    .then((x)=>res.status(200).send(x))
    .catch(next);
  })
  .delete('/', (req,res,next) => {
    users.deleteUser(req.body.user)
    .then((x)=>res.status(200).send(x))
    .catch(next);
  })

  module.exports = app;
