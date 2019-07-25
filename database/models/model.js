const db = require('../dbConfig');

const getAll = async () => {
  const users = db('shire');
  return users;
};

const addUser = async user => {
  const [id] = await db('shire').insert(user);
  return id;
};
module.exports = { getAll, addUser };
