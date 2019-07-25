const db = require('../dbConfig');

const getAll = async (req, res) => {
  const users = db('shire');
  return users;
};

module.exports = { getAll };
