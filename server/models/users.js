const data = require('../data/users.json');


function getUsers(){
  return data.users;
}
function getFriends(ids){
  return data.users.filter((user) => ids.includes(user.user_id));
 }
 function getUser(username, password){
   return data.users.find((user)=> user.username === username && user.password === password);
 }
 function getUserById(id){
  return data.users.find((user)=> user.user_id === id);
 }
 function addUser(paramUser){
  paramUser.workout_id = data.users[data.users.length-1].user_id + 1;
   data.users.push(paramUser);
   return paramUser;
 }
 function editUser(paramUser){
   const i = data.users.findIndex((user) => user.user_id === paramUser.user_id);
   data.users[i] = paramUser;
   return data.users[i];
 }
 
 function deleteUser(paramUser){
   const i = data.users.findIndex((user) => user.user_id === paramUser.user_id);
   data.users.splice(i,1);
   return {};
 }

 module.exports = { getUsers, getFriends, getUser, getUserById, addUser, editUser, deleteUser};