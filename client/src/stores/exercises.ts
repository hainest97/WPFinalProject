import data from '../data/exercises.json';
import { reactive } from 'vue';

const Exercises = reactive(getExercises());

export function getExercises(){
  return data.exercises as Exercise[];
}
export function getExercise(exercise_id: number){
  return data.exercises.find((exercise) => exercise.exercise_id = exercise_id) as Exercise;
}
export function addExercise(paramExercise: Exercise){
  Exercises.push(paramExercise);
}
export function editExercise(paramExercise: Exercise){
  const i = Exercises.findIndex((Exercise) => Exercise.exercise_id === paramExercise.exercise_id);
  Exercises[i] = paramExercise;
}
export function deleteExercise(paramExercise: Exercise){
  const i = Exercises.findIndex((Exercise) => Exercise.exercise_id === paramExercise.exercise_id);
  Exercises.splice(i,1);
}
export interface Root {
  exercises: Exercise[]
  total: number
  skip: number
  limit: number
}

export interface Exercise {
  exercise_id: number
  exercise: string
  calorie_index: number
}

export default Exercises;