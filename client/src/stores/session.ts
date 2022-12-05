import myFetch from "@/services/myfetch";
import { reactive, watch } from "vue";
import { getUser, type User } from "./users";
import { getUserWorkouts, Workouts } from "./workouts";

export const session = reactive({
  user: null as User | null,
});

export default session;

watch(() => session.user, (user) => {
  if(user){
    getUserWorkouts().then((x)=> Workouts.push(...x));
  } else {
    Workouts.splice(0, Workouts.length);
  }
});

export async function api<T>(url: string, data: any = null, method?: string) {
  return await myFetch<T>(url, data, method);
}
export function login(username: string, password: string) {
  let errMessage: string = "";
  getUser(username, password).then((user) => {
    if (user) {
      session.user = user;
    } else {
      errMessage = "Invalid username or password";
    }
  });
  return errMessage;
}
export function logout() {
  session.user = null;
  
}


