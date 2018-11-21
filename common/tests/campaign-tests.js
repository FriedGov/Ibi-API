var supertest = require('supertest');
var server = supertest.agent('http://localhost:3000/api/campaigns');
describe("campaign tests", function () {
  describe("Test#1 get all active campaigns", function () {
    it("Should return a 200 code", function (done) {
      server.get("/get-active-campaigns").send(
      ).expect(200, done);
    });
  });


  describe("Test#2 get places belonging to a campaign", function () {
    it("Should return a 200 code", function (done) {
      server.get("/get-places-by-campaign/200").send(
      ).expect(200, done);
    });
  });

  describe("Test#3 get all campaigns", function () {
    it("Should return a 200 code", function (done) {
      server.get("").send(
      ).expect(200, done);
    });
  });

  describe("Test#4 add a campaign", function () {
    it("Should return a 200 code", function (done) {
      server.get("").send({
          "name": "string",
          "startDate": "2018-07-01T07:29:10.387Z",
          "endDate": "2018-07-01T07:29:10.387Z"
        }
      ).expect(200, done);
    });
  });
});
