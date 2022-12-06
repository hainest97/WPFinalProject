const express = require('express');
const exercises = require('../models/exercises');

const app = express.Router();

app
  .get('/',(req,res,next) => {
    exercises.getExercises()
    .then(x=>res.status(200).send(x))
    .catch(next);
  })
  .get('/:exerciseId',(req,res,next) => {
    exercises.getExercise(req.params.exerciseId)
    .then(x=>res.status(200).send(x))
    .catch(next);
  })
  .post('/',(req,res,next) => {
    exercises.addExercise(req.body.exercise)
    .then(x=>res.status(200).send(x))
    .catch(next);
  })
  .patch('/',(req,res,next) => {
    exercises.editExercise(req.body.exercise)
    .then(x=>res.status(200).send(x))
    .catch(next);
  })
  .delete('/',(req,res,next) => {
    exercises.deleteExercise(req.body.exercise)
    .then(x=>res.status(200).send(x))
    .catch(next);
  })

  module.exports = app;