const express = require('express');
const exercises = require('../models/exercises');

const app = express.Router();

app
  .get('/',(req,res) => {
    res.status(200).send(exercises.getExercises());
  })
  .get('/:exerciseId',(req,res) => {
    res.status(200).send(exercises.getExercise(req.params.exerciseId))
  })
  .post('/',(req,res) => {
    res.status(200).send(exercises.addExercise(req.body.exercise))
  })
  .patch('/',(req,res) => {
    res.status(200).send(exercises.editExercise(req.body.exercise))
  })
  .delete('/',(req,res) => {
    res.status(200).send(exercises.deleteExercise(req.body.exercise))
  })

  module.exports = app;