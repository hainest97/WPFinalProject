const express = require('express');
const users = require('../models/users');

const app = express.Router();

app
  .get('/', (req, res) => {
    res.status(200).send(users.getUsers());
  })
  .get('/friends/:userId', (req, res) => {
    res.status(200).send(users.getFriends(users.getUserById(+req.params.userId)?.friends));
  })
  .post('/login', (req, res) => {
    res.status(200).send(users.getUser(req.body.username, req.body.password));
    // if (user) {
    //   res.status(200).send(user);
    // }
    // else {
    //   res.status(200).send("User not found");
    // }
  })
  .post('/', (req,res) => {
    res.status(200).send(users.addUser(req.body.user));
  })
  .patch('/',(req,res) => {
    res.status(200).send(users.editUser(req.body.user));
  })
  .delete('/', (req,res) => {
    res.status(200).send(users.deleteUser(req.body.user));
  })

  module.exports = app;
