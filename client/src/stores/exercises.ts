import { reactive } from 'vue';
import { api } from './session';

const PATCH = 'PATCH';
const DELETE = 'DELETE';

const Exercises = reactive([] as Exercise[]);
getExercises().then((x)=>Exercises.push(...x));

export function getExercises(){
  return api<Exercise[]>('exercises');
}
export function getExercise(exercise_id: number){
  return api<Exercise>(`exercises/${exercise_id}`);
}
export function addExercise(paramExercise: Exercise){
  Exercises.push(paramExercise);
  return api<Exercise>('exercises',{exercise: paramExercise});
}
export function editExercise(paramExercise: Exercise){
  const i = Exercises.findIndex((Exercise) => Exercise.exercise_id === paramExercise.exercise_id);
  Exercises[i] = paramExercise;
  return api<Exercise>('exercises',{exercise: paramExercise},PATCH);
}
export function deleteExercise(paramExercise: Exercise){
  const i = Exercises.findIndex((Exercise) => Exercise.exercise_id === paramExercise.exercise_id);
  Exercises.splice(i,1);
  return api<Exercise>('exercises',{exercise: paramExercise},DELETE);
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