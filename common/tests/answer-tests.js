var supertest = require('supertest');
var server = supertest.agent('http://localhost:3000/api/answers');

describe("Answer tests", function () {

  describe("Test#1 remove an answer", function () {
    it("Should return a 200 code", function (done) {
      server.delete("/remove/500").send(
      ).expect(200, done);
    });
  });

  describe("Test#2 answer an open question", function () {
    it("Should return 200 code", function (done) {
      server.post("/answeropen/").send({
          "languageId": 1,
          "text": "test",
          "questionId": 900,
          "accountId": 900,
          "placeId": 900,
          "time": "2008-06-29 18:52"
        }
      ).expect(200, done);
    });
  });

  describe("Test#3 answer an open question with a missing value", function () {
    it("Should return 400 code", function (done) {
      server.post("/answeropen/").send({
          "languageId": 1,
          "text": "test",
          "accountId": 900,
          "placeId": 900,
          "time": "2008-06-29 18:52"
        }
      ).expect(400, done);
    });
  });

  describe("Test#4 answer a rating question", function () {
    it("Should return 200 code", function (done) {
      server.post("/answer-rating/").send({
          "languageId": 1,
          "rating": 2.5,
          "accountId": 900,
          "questionId": 900,
          "placeId": 900,
          "time": "2008-06-29 18:52"
        }
      ).expect(200, done);
    });
  });

  describe("Test#5 answer a rating question with a missing value", function () {
    it("Should return 200 code", function (done) {
      server.post("/answer-rating/").send({
          "languageId": 1,
          "rating": 2.5,
          "questionId": 900,
          "placeId": 900,
          "time": "2008-06-29 18:52"
        }
      ).expect(400, done);
    });
  });

  describe("Test#6 add a  possible answer to a multiple choice question", function () {
    it("Should return 200 code", function (done) {
      server.post("/add/").send({
          "questionId": 900,
          "languageId": 1,
          "text": "test"
        }
      ).expect(200, done);
    });
  });

  describe("Test#7 add a  possible answer to a multiple choice question with a missing value", function () {
    it("Should return 200 code", function (done) {
      server.post("/add/").send({
          "languageId": 1,
          "text": "test"
        }
      ).expect(400, done);
    });
  });
});
