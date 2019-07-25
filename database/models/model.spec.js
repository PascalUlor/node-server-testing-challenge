const db = require('../dbConfig');
const shireModel = require('./model');

beforeEach(async () => {
  await db('shire').truncate();
});
describe('Test case for database', () => {
  it('should return no user if database is empty', () => {
    let users = shireModel.getAll();
    expect(users).toMatchObject({});
  });
});
