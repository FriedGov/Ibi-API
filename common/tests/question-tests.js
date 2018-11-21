var supertest = require('supertest');
var server = supertest.agent('http://localhost:3000/api/questions');

describe("Question tests", function () {
  describe("Test#1 get the answers based on language,account, latitude, longitude, maxdistance", function () {
    it("Should return a 200 code", function (done) {
      server.get("/1/1/31.5500/6/1").send(
      ).expect(200, done);
    });
  });

  describe("Test#2 Post a linked to place question", function () {
    it("Should return a 200 code", function (done) {
      server.post("/add-question-to-place-and-campaign").send({
        "lid" : 1,
        "cid" : 1,
        "paid" : 1,
        "qtype" : "Open question",
        "desc" : "test",
        "cId" : 5
        }
      ).expect(200, done);
    });
  });

  describe("Test#2 Post a linked to place question that is missing values", function () {
    it("Should return a 200 code", function (done) {
      server.post("/add-question-to-place-and-campaign").send({
          "lid" : 1,
          "cid" : 1,
          "paid" : 1,
          "qtype" : "Open question",
          "desc" : "test",
        }
      ).expect(400, done);
    });
  });



  describe("Test#3 Post a general question", function () {
    it("Should return a 200 code", function (done) {
      server.post("/add-question-to-campaign/").send({
          "lid" : 1,
          "cid" : 1,
          "qtype" : "Open question",
          "desc" : "test",
          "cId" : 5
        }
      ).expect(200, done);
    });
  });

  describe("Test#4 Post a general question with missing values", function () {
    it("Should return a 200 code", function (done) {
      server.post("/add-question-to-place-and-campaign").send({
          "lid" : 1,
          "cid" : 1,
          "qtype" : "Open question",
          "desc" : "test",
          "cId" : 5
        }
      ).expect(400, done);
    });
  });

  describe("Test#5 remove a question", function () {
    it("Should return a 200 code", function (done) {
      server.delete("/delete/0/").send(
      ).expect(200, done);
    });
  });

});


