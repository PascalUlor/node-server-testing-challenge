const knex = require('knex');
const config = require('../knexfile');
const environment = require('../environment');

const db = knex(config[environment]);
console.log(db);
module.exports = db;
