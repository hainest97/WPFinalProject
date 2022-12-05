const data = require('../data/workouts.json');

function getUserWorkouts(user_id){
  return data.workouts.filter((workout) => workout.user_id === user_id);
}
function getFriendsWorkouts(user_ids){
  return data.workouts.filter((workout) => user_ids.includes(workout.user_id));
}
function getWorkout(workout_id){
  return data.workouts.find((workout) => workout.workout_id === workout_id);
}
function addWorkout(paramWorkout){
  paramWorkout.workout_id = data.workouts[data.workouts.length-1].workout_id + 1;
  data.workouts.push(paramWorkout);
  return paramWorkout;
}
function editWorkout(paramWorkout){
  const i = data.workouts.findIndex((workout) => workout.workout_id === paramWorkout.workout_id);
  data.workouts[i] = paramWorkout;
  return data.workouts[i];
}
function deleteWorkout(paramWorkout){
  const i = data.workouts.findIndex((workout) => workout.workout_id === paramWorkout.workout_id);
  data.workouts.splice(i,1);
  return {};
}

module.exports = {getUserWorkouts, getFriendsWorkouts, getWorkout, addWorkout, editWorkout, deleteWorkout}