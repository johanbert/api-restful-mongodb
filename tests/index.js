const request = require('supertest');
const chai = require('chai')
const expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things')); // Don't swap these two

const SERVER_HOST = process.env.SERVER_HOST || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 3001;
const URL = `http://${SERVER_HOST}:${SERVER_PORT}`;

describe('TESTING API ENDPOINTS', () => {
    it('POST /api/v1/users/: WHEN el req.body sea con una propiedad que no exista THEN debe ser rechazada', async() => {
        const endpoint = '/api/v1/users/617b580ab127ee32c07065bb'
        const json = {
            nombre: 'CUALQUIERA',
            pepito: 'PEPITO'
        }
        const res = await request(URL)
            .put(endpoint)
            .send(json)

        expect(res.statusCode).to.equal(404)
        expect(res.body.message).to.equal("Your body properties doesn't allowed")
    });
    it('GET /api/v1/users/: CUANDO haga un GET request THEN debe devolver una lista', async() => {
        const endpoint = '/api/v1/users'
        const res = await request(URL)
            .get(endpoint)

        const expected = {
            _id: "61678f9fd63dc968978de59f",
            nombre: "Roxsneilyd",
            edad: 28,
            fecha: "2021-10-14T01:58:00.719Z"
        }
        expect(res.statusCode).to.equal(200)
        expect(res.body).to.be.an('array').that.contains.something.like(expected);
    });
});