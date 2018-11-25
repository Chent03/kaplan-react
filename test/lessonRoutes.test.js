const expect = require('chai').expect;
const request = require('supertest');
const app = require('../index');

describe('API /api/lessons', () => {
    it('should return 200', async () => {
        const res = await request(app).get('/api/lessons');
        expect(res.status).to.eql(200);
    })

    it('should have a length of four', async () => {
        const res = await request(app).get('/api/lessons');
        expect(res.body.length).to.eql(4);
    })

    it('header should have application/json', async () => {
        const res = await request(app).get('/api/lessons');
        expect(res.headers['content-type']).to.contain('application/json');
    })
})