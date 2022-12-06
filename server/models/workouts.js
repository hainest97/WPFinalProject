const { connect } = require('./mongo');

const COLLECTION_NAME = 'workouts';

async function collection(){
  const client = await connect();
  return client.db('stick_to_fitness').collection(COLLECTION_NAME);
}
async function getUserWorkouts(user_id){
  const db = await collection();
  const data = await db.find({user_id: user_id}).toArray();
  return data;
}
async function getFriendsWorkouts(user_ids){
  const db = await collection();
  const data = await db.find({user_id: {$in: user_ids} }).toArray();
  return data;
}
async function getWorkout(workout_id){
  const db = await collection();
  const data = await db.findOne({workout_id: workout_id});
  return data;
}
async function addWorkout(paramWorkout){
  const db = await collection();
  const id = await (await db.find().sort({workout_id:-1}).limit(1).toArray()).map((u)=> u.workout_id)[0];
  if(paramWorkout.workout_id==0){
    paramWorkout.workout_id = +id + 1;
  }
  const data = await db.insertOne(paramWorkout);
  return paramWorkout;
}
async function editWorkout(paramWorkout){
  const db = await collection();
  const data = await db.updateOne({workout_id: paramWorkout.workout_id},{$set: {
    exercise: paramWorkout.exercise,
    time: paramWorkout.time,
    calories: paramWorkout.calories
  }});
  return paramWorkout;
}
async function deleteWorkout(paramWorkout){
  const db = await collection();
  const data = await db.deleteOne({workout_id: paramWorkout.workout_id});
  return {};
}

module.exports = {COLLECTION_NAME, collection, getUserWorkouts, getFriendsWorkouts, getWorkout, addWorkout, editWorkout, deleteWorkout}