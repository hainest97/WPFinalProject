import data from '../data/workouts.json';
import { reactive } from 'vue';
import { session } from './session';
import type { Exercise } from './exercises';

const Workouts = reactive(getUserWorkouts(session.user!.user_id));

export function getUserWorkouts(user_id: number){
  return data.workouts.filter((workout) => workout.user_id === user_id) as Workout[];
}
export function getFriendsWorkouts(user_ids: number[]){
  return data.workouts.filter((workout) => user_ids.includes(workout.user_id)) as Workout[];
}
export function getWorkout(workout_id: number){
  return data.workouts.find((workout) => workout.workout_id === workout_id) as Workout;
}
export function addWorkout(paramWorkout: Workout){
  paramWorkout.workout_id = Workouts[Workouts.length-1].workout_id + 1;
  Workouts.push(paramWorkout);
}
export function editWorkout(paramWorkout: Workout){
  const i = Workouts.findIndex((workout) => workout.workout_id === paramWorkout.workout_id);
  Workouts[i] = paramWorkout;
}
export function deleteWorkout(paramWorkout: Workout){
  const i = Workouts.findIndex((workout) => workout.workout_id === paramWorkout.workout_id);
  Workouts.splice(i,1);
}


export interface Root {
  workouts: Workout[]
  total: number
  skip: number
  limit: number
}

export interface Workout {
  workout_id: number
  exercise: Exercise
  user_id: number
  time: number
  calories: number
}

export default Workouts;