const data = require('../data/exercises.json');

function getExercises(){
  return data.exercises;
}
function getExercise(exercise_id){
  return data.exercises.find((exercise) => exercise.exercise_id = exercise_id);
}
function addExercise(paramExercise){
  paramExercise.workout_id = data.exercises[data.exercises.length-1].exercise_id + 1;
  data.exercises.push(paramExercise);
  return paramExercise;
}
function editExercise(paramExercise){
  const i = data.exercises.findIndex((Exercise) => Exercise.exercise_id === paramExercise.exercise_id);
  data.exercises[i] = paramExercise;
  return data.exercises[i];
}
function deleteExercise(paramExercise){
  const i = data.exercises.findIndex((Exercise) => Exercise.exercise_id === paramExercise.exercise_id);
  data.exercises.splice(i,1);
  return {};
}

module.exports = { getExercises, getExercise, addExercise, editExercise, deleteExercise};