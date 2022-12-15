
const { connect } = require('./mongo');

const COLLECTION_NAME = 'users';

async function collection() {
  const client = await connect();
  return client.db('stick_to_fitness').collection(COLLECTION_NAME);
}
async function getUsers() {
  const db = await collection();
  const data = await db.find().toArray();
  return data;
}
async function getFriends(ids) {
  const db = await collection();
  const data = await db.find({ user_id: { $in: ids } }).toArray()
  return data;
}
async function searchUsers(name) {
  const db = await collection();
  const data = await db.find({ $or: [{ firstName: {$regex: name, $options: 'i'}}, {lastName: {$regex: name, $options: 'i'}}]}).toArray();
  return data;
}
async function getUser(username, password) {
  const db = await collection();
  const data = await db.findOne({ username: username, password: password });
  return data;
}
async function getUserById(id) {
  const db = await collection();
  const data = await db.findOne({ user_id: id });
  return data;
}
async function addUser(paramUser) {
  const db = await collection();
  const id = await (await db.find().sort({ user_id: -1 }).limit(1).toArray()).map((u) => u.user_id)[0];
  if (paramUser.user_id == 0) {
    paramUser.user_id = +id + 1;
  }
  const data = await db.insertOne(paramUser);
  return paramUser;
}
async function editUser(paramUser) {
  const db = await collection();
  const data = await db.updateOne({ user_id: paramUser.user_id }, {
    $set:
    {
      firstName: paramUser.firstName,
      lastName: paramUser.lastName,
      username: paramUser.username,
      password: paramUser.password,
      isAdmin: paramUser.isAdmin,
      sex: paramUser.sex,
      height: paramUser.height,
      weight: paramUser.weight,
      age: paramUser.age
    }
  });
  return paramUser;
}

async function deleteUser(paramUser) {
  const db = await collection();
  const data = await db.deleteOne({ user_id: paramUser.user_id });
  return {};
}

module.exports = { COLLECTION_NAME, collection, getUsers, getFriends, searchUsers, getUser, getUserById, addUser, editUser, deleteUser };