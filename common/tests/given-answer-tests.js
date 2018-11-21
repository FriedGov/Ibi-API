var supertest = require('supertest');
var server = supertest.agent('http://localhost:3000/api/given-answers');

describe("Given answers tests", function () {
  describe("Test#1 get the answer stats by a multiple choice question", function () {
    it("Should return a 200 code", function (done) {
      server.get("/multiple-choice-question-answers/1/1").send(
      ).expect(200, done);
    });
  });

  describe("Test#2 get the answer stats by a open choice question", function () {
    it("Should return a 200 code", function (done) {
      server.get("/open-question-answers/1/1").send(
      ).expect(200, done);
    });
  });

  describe("Test#3 get average score of a rating question", function () {
    it("Should return a 200 code", function (done) {
      server.get("/get-average/1/1").send(
      ).expect(200, done);
    });
  });
});

