const { connect } = require('./mongo');

const COLLECTION_NAME = 'exercises';

async function collection(){
  const client = await connect();
  return client.db('stick_to_fitness').collection(COLLECTION_NAME);
}

async function getExercises(){
  const db = await collection();
  const data = await db.find().toArray();
  return data;
}
async function getExercise(exercise_id){
  const db = await collection();
  const data = await db.findOne({exercise_id: exercise_id});
  return data;
}
async function addExercise(paramExercise){
  const db = await collection();
  const id = await (await db.find().sort({exercise_id:-1}).limit(1).toArray()).map((u)=> u.exercise_id)[0];
  if(paramExercise.user_id==0){
    paramExercise.exercise_id = +id + 1;
  }
  const data = await db.insertOne(paramExercise);
  return paramExercise;
}
async function editExercise(paramExercise){
  const db = await collection();
  const data = await db.updateOne({exercise_id: paramExercise.exercise_id},{$set: {
    exercise: paramExercise.exercise,
    calorie_index: paramExercise.calorie_index
  }});
  return paramExercise;
}
async function deleteExercise(paramExercise){
  const db = await collection();
  const data = await db.deleteOne({exercise_id: paramExercise.exercise_id});
  return {};
}

module.exports = { COLLECTION_NAME, collection, getExercises, getExercise, addExercise, editExercise, deleteExercise};