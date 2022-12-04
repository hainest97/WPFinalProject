import { reactive } from 'vue';
import data from '../data/users.json';

const Users = reactive(getUsers());
export function getUsers(){
  return data.users as User[];
}
export function getFriends(ids: number[]){
 return data.users.filter((user) => ids.includes(user.user_id)) as User[];
}
export function getUser(username: string , password: string){
  return data.users.find((user)=> user.username === username && user.password === password) as User;
}
export function addUser(paramUser: User){
  Users.push(paramUser);
}
export function editUser(paramUser: User){
  const i = Users.findIndex((user) => user.user_id === paramUser.user_id);
  Users[i] = paramUser;
}

export function deleteUser(paramUser: User){
  const i = Users.findIndex((user) => user.user_id === paramUser.user_id);
  Users.splice(i,1);
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