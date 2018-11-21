var supertest = require('supertest');
var server = supertest.agent('http://localhost:3000/api/accounts');
describe("Account tests", function () {
  describe("Test#1 Post a full body to the accounts", function () {
    it("Should return a json file and a 200 code", function (done) {
      server.post("").send({
        "gender": "male",
        "age": "BETWEEN18AND34",
        "single": true,
        "city": "Almelo"
      }).expect(200, done);
    });
  });

  describe("Test#2 Post an empty body to the accounts", function () {
    it("Should return a 422 code", function (done) {
      server.post("").send({}).expect(422, done);
    });
  });

