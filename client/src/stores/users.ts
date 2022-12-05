import session, { api } from './session';
import { reactive } from 'vue';

const PATCH = 'PATCH';
const DELETE = 'DELETE';

const Users = reactive([] as User[]);
getUsers().then((data) => Users.push(...data));

export function getUsers(){
  return api<User[]>('users');
}
export function getFriends(){
 return api<User[]>(`users/friends/${session.user?.user_id}`);
}
export function getUser(username: string , password: string){
  return api<User>('users/login',{username: username, password: password});
}
export function addUser(paramUser: User){
  paramUser.user_id = Users[Users.length-1].user_id + 1;
  Users.push(paramUser);
  return api<User>('users',{user: paramUser});
}
export function editUser(paramUser: User){
  const i = Users.findIndex((user) => user.user_id === paramUser.user_id);
  Users[i] = paramUser;
  return api<User>('users',{user: paramUser},PATCH);
}

export function deleteUser(paramUser: User){
  const i = Users.findIndex((user) => user.user_id === paramUser.user_id);
  Users.splice(i,1);
  return api<User>('users',{user: paramUser},DELETE);
}

export interface Root {
  users: User[]
  total: number
  skip: number
  limit: number
}

export interface User {
  user_id: number
  firstName: string
  lastName: string
  username: string
  password: string
  isAdmin: boolean
  sex: string
  height: number
  weight: number
  age: number
  friends: number[]
}

 export default Users;