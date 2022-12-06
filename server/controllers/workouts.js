const express = require('express');
const users = require('../models/users');
const workouts = require('../models/workouts');

const app = express.Router();

app
  .get('/myWorkouts/:userId', (req,res,next) => {
    workouts.getUserWorkouts(+req.params.userId)
    .then(x=>res.status(200).send(x))
    .catch(next);
  })
  .get('/:workoutId',(req,res,next) => {
    workouts.getWorkout(+req.params.workoutId)
    .then(x=>res.status(200).send(x))
    .catch(next);
  })
  .get('/friendsWorkouts/:userId', (req,res,next) => {
    users.getUserById(+req.params.userId)
    .then(x=>workouts.getFriendsWorkouts(x?.friends)
    .then(y=>res.status(200).send(y)))
    .catch(next);
  })
  .post('/',(req,res,next) => {
    workouts.addWorkout(req.body.workout)
    .then((x)=>res.status(200).send(x))
    .catch(next);
  })
  .patch('/',(req,res,next) => {
    workouts.editWorkout(req.body.workout)
    .then((x)=>res.status(200).send(x))
    .catch(next);
  })
  .delete('/',(req,res,next) => {
    workouts.editWorkout(req.body.workout)
    .then((x)=>res.status(200).send(x))
    .catch(next);
  })

  module.exports = app;