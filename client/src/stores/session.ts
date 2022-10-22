import { reactive } from "vue";

const session = reactive({
  user: null as User | null,
});

export function login(username: string, password: string) {
  let errMessage: string = "";
  Users.forEach((item) => {
    if (item.username === username && item.password === password) {
      session.user = item;
    }
  });
  if (session.user == null) {
    errMessage = "Invalid username or password";
  }
  return errMessage;
}
export function logout() {
  session.user = null;
}

var workout_id_counter = 1;
export class Workout {
  public workout_id: number;
  public exercise: Exercise;
  public user: User;
  public time: number;
  public calories: number;
  constructor(exercise: Exercise, user: User, time: number) {
    this.workout_id = workout_id_counter++;
    this.exercise = exercise;
    this.user = user;
    this.time = time;
    this.calories = user.weight * exercise?.calorie_index * time/ 60;
  }
}
var user_id_counter = 1;
export class User {
  public user_id: number;
  public firstName: string;
  public lastName: string;
  public username: string;
  public password: string;
  public isAdmin: boolean;
  public sex: string;
  public height: number;
  public weight: number;
  public age: number;
  public workouts: Workout[];
  public friends: User[];
  constructor(
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    isAdmin: boolean,
    sex: string,
    height: number,
    weight: number,
    age: number
  ) {
    this.user_id = user_id_counter++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.isAdmin = isAdmin;
    this.sex = sex;
    this.height = height;
    this.weight = weight;
    this.age = age;
    this.workouts = [];
    this.friends = [];
  }
}
var exercise_id_counter = 1;
export class Exercise {
  public exercise_id: number;
  public exercise: string;
  public calorie_index: number;
  constructor(exercise: string, calorie_index: number) {
    this.exercise_id = exercise_id_counter++;
    this.exercise = exercise;
    this.calorie_index = calorie_index;
  }
}
export const Exercises: Exercise [] = [];
Exercises.push(new Exercise("Walking (3mph)",5 / 3));
Exercises.push(new Exercise("Running (6mph)",14 / 3));
Exercises.push(new Exercise("Swimming (Front Crawl)",2.76));

export const Users : User[] = [];
Users.push(new User("John","Wick","johnwick","ilovedogs",false,"male",72,200,58));
Users.push(new User("Carrie Ann","Moss","cam","trinity",true,"female",69,130,55));
Users.push(new User("Admin","Admin","admin","iruleall",true,"male",72,200,25));

export const Workouts : Workout[] = [];
// export const Workouts : Workout[] = [];
Workouts.push(new Workout(Exercises[0],Users[0],30));
Workouts.push(new Workout(Exercises[1],Users[0],30));
Workouts.push(new Workout(Exercises[2],Users[1],30));
Users[0].workouts.push(Workouts[0]);
Users[0].workouts.push(Workouts[1]);
Users[1].workouts.push(Workouts[2]);
Users[0].friends.push(Users[1]);
Users[1].friends.push(Users[0]);
export default session;

export const exercise_names : string[] = [];
Exercises.forEach((item)=> {
  exercise_names.push(item.exercise);
})
