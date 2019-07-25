const db = require('../dbConfig');
const shireModel = require('./model');

beforeEach(async () => {
  await db('shire').truncate();
});
describe('Test case for database', () => {
  it('should return no user if database is empty', async () => {
    let users = await shireModel.getAll();
    expect(users).toMatchObject({});
  });
  it('should create a new user', async () => {
    let users = await shireModel.getAll();
    expect(users).toMatchObject({});

    await shireModel.addUser({ name: 'pascal', age: 2 });
    user = await shireModel.getAll();
    expect(user).toHaveLength(1);
  });
});
