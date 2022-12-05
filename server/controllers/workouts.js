const express = require('express');
const users = require('../models/users');
const workouts = require('../models/workouts');

const app = express.Router();

app
  .get('/myWorkouts/:userId', (req,res) => {
    res.status(200).send(workouts.getUserWorkouts(+req.params.userId));
  })
  .get('/:workoutId',(req,res) => {
    res.status(200).send(workouts.getWorkout(+req.params.workoutId));
  })
  .get('/friendsWorkouts/:userId', (req,res) => {
    const user = users.getUserById(+req.params.userId);
    res.status(200).send(workouts.getFriendsWorkouts(user?.friends));
  })
  .post('/',(req,res) => {
    res.status(200).send(workouts.addWorkout(req.body.workout));
  })
  .patch('/',(req,res) => {
    res.status(200).send(workouts.editWorkout(req.body.workout));
  })
  .delete('/',(req,res) => {
    res.status(200).send(workouts.deleteWorkout(req.body.workout));
  })

  module.exports = app;