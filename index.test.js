const request = require('supertest');
const app = require('./index');

test('GET / returns Hello, Jenkins!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello, Jenkins!');
});

