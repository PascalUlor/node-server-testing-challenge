const app = require('../server/server');
const request = require('supertest')(app);

describe('Controller routes', () => {
  it('test get all users route', () => {
    return request.get('/api/user').expect(200);
  });

  it('test add new user route', () => {
    return request
      .post('/api/user')
      .send({
        name: 'steve',
        age: 25
      })
      .expect(201);
  });

  it('test should return 409 if user already exists', () => {
    return request
      .post('/api/user')
      .send({
        name: 'merry',
        age: 22
      })
      .expect(409);
  });

  it('delete selected user', () => {
    return request
      .del(`/api/user/${1}`)
      .send({})
      .expect(200);
  });
});
