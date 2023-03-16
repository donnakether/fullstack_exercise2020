const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');


describe('NGO', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new NGO', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APADE",
            email: "contato@contato.com",
            whatsapp: "1199991919",
            city: "Rio do Sul",
            uf: "SC"           
        });

        console.log(response.body);
    });
});