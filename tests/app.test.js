
const app = require('../index');
const request = require('supertest');


describe('GET /', () => {
    test('It should response the GET method', async () => {
        await request(app).get('/').then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.text).toBe('Response from the server');
        })
    });
});

