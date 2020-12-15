const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('responds with spot', async() => {
    const response = await request(app)
      .get('/');
    expect(response.body).toEqual({ 
      'name':'spot', 
      'age':5, 
      'weight':'20 lbs' 
    });
  });
});
