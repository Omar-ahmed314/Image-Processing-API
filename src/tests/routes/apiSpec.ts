import supertest from 'supertest';
import app from '../../index';
const superTest = supertest(app);

describe("Testing the Rest API", () => {
    it("it should return status code 200 success", async () => {
        const res = await superTest.get('/api').query({
            fileName: 'jford',
            width: '200',
            height: '200'
        });
        expect(res.status).toEqual(200);
    });
    it("it should return status code 401 fail", async () => {
        const res = await superTest.get('/api/image').query({
            fileName: 'jford',
            width: '200',
            height: 'abc'
        });
        expect(res.status).toEqual(401);
    });
    it("it should return status code 200 success", async () => {
        const res = await superTest.get('/api/image').query({
            fileName: 'fjord',
            width: '200',
            height: '200'
        });
        expect(res.status).toEqual(200);
    });
});