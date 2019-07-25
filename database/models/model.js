const db = require('../dbConfig');

const getAll = async () => {
  const users = db('shire');
  return users;
};

const addUser = async user => {
  const [id] = await db('shire').insert(user);
  return db('shire').where({ id });
};

const deleteUser = async id => {
  return db('shire')
    .where({ id })
    .del();
};
module.exports = { getAll, addUser, deleteUser };
