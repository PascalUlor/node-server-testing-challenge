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
    expect(user).toMatchObject([{ name: 'pascal', age: 2 }]);
  });
  it('should delete a user', async () => {
    let users = await shireModel.getAll();
    expect(users).toMatchObject({});

    await shireModel.addUser({ name: 'pascal', age: 2 });
    await shireModel.addUser({ name: 'joe', age: 45 });
    user = await shireModel.getAll();
    expect(user).toHaveLength(2);

    await shireModel.deleteUser(1);
    user = await shireModel.getAll();
    expect(user).toHaveLength(1);
  });
  it('should get single user', async () => {
    await shireModel.addUser({ name: 'clark', age: 25 });
    let user = await shireModel.getByName('clark');
    expect(user).toMatchObject([{ name: 'clark', age: 25 }]);
  });
});
