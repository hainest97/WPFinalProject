import { reactive } from "vue";
import { getUser, type User } from "./users";


export const session = reactive({
  user: null as User | null,
});

export function login(username: string, password: string) {
  let errMessage: string = "";
  let user = getUser(username,password);
  if(user){
    session.user = user;
  }
  else {
    errMessage = "Invalid username or password";
  }
  return errMessage;
}
export function logout() {
  session.user = null;
}

export default session;
