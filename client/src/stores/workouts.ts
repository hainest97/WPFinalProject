
import { reactive } from 'vue';
import session, { api } from './session';
import type { Exercise } from './exercises';

const PATCH = 'PATCH';
const DELETE = 'DELETE';

export const Workouts = reactive([] as Workout[]);

export function getUserWorkouts(){
  return api<Workout[]>(`workouts/myWorkouts/${session.user?.user_id}`);
}
export function getFriendsWorkouts(){
  return api<Workout[]>(`workouts/friendsWorkouts/${session.user?.user_id}`);
}
export function getWorkout(workout_id: number){
  return api<Workout>(`workouts/${workout_id}`);
}
export function addWorkout(paramWorkout: Workout){
  paramWorkout.workout_id = Workouts[Workouts.length-1].workout_id + 1;
  Workouts.push(paramWorkout);
  return api<Workout>('workouts',{workout: paramWorkout});
}
export function editWorkout(paramWorkout: Workout){
  const i = Workouts.findIndex((workout) => workout.workout_id === paramWorkout.workout_id);
  Workouts[i] = paramWorkout;
  return api<Workout>('workouts',{workout: paramWorkout},PATCH);
}
export function deleteWorkout(paramWorkout: Workout){
  const i = Workouts.findIndex((workout) => workout.workout_id === paramWorkout.workout_id);
  Workouts.splice(i,1);
  return api<Workout>('workouts',{workout: paramWorkout},DELETE);
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