'use strict';

module.exports = function (Givenanswer) {
  var utilities = require('../../server/utilities');

  var isStatic = true;
  Givenanswer.disableRemoteMethodByName('prototype.patchAttributes', isStatic);
  Givenanswer.disableRemoteMethodByName('prototype.updateAttributes', isStatic);
  Givenanswer.disableRemoteMethodByName('create', isStatic);
  Givenanswer.disableRemoteMethodByName('exists', isStatic);
  Givenanswer.disableRemoteMethodByName('count', isStatic);
  Givenanswer.disableRemoteMethodByName('find', isStatic);
  Givenanswer.disableRemoteMethodByName('findById', isStatic);
  Givenanswer.disableRemoteMethodByName('findOne', isStatic);
  Givenanswer.disableRemoteMethodByName('deleteById', isStatic);
  Givenanswer.disableRemoteMethodByName('upsert', isStatic);
  Givenanswer.disableRemoteMethodByName('upsertWithWhere', isStatic);
  Givenanswer.disableRemoteMethodByName('updateAll', isStatic);
  Givenanswer.disableRemoteMethodByName('replaceById', isStatic);
  Givenanswer.disableRemoteMethodByName('replaceOrCreate', isStatic);
  Givenanswer.disableRemoteMethodByName('createChangeStream', isStatic);

  /**
   * Get how many times the answers from a multiplechoice  have been answered
   * @param questionId the question you want to see the stats from
   * @param placeId the place you want to know the stats from
   * @param cb the callback
   */
  Givenanswer.getAmountAnsweredByMultipleChoice = function(questionId, placeId, cb) {
    var query = 'SELECT AnswersQuestions.answerId, counter.amount,' +
      ' Answer.text FROM AnswersQuestions left join ' +
      '(SELECT answerId, count(answerId) AS amount from GivenAnswer WHERE ' +
      'GivenAnswer.questionId = ' + questionId + ' AND GivenAnswer.placeId = '+ placeId  +' ' +
      'GROUP BY GivenAnswer.answerId) AS counter on counter.answerId = AnswersQuestions.answerId ' +
      'JOIN Answer on Answer.id = AnswersQuestions.answerId WHERE ' +
      'AnswersQuestions.questionId = ' + questionId +
      ' GROUP BY AnswersQuestions.answerId';
    var ds = Givenanswer.dataSource;
    utilities.sendSql(ds, query, cb);
  };

  /**
   * Get all the open answers given by users for an open question
   * @param questionId the id belonging to the openquestion
   * @param placeId the placeid of the place where the question was answered
   * @param cb the callback
   */
  Givenanswer.getOpenAnswers =function (questionId, placeId, cb) {
    var query = 'SELECT * FROM `GivenAnswer` WHERE `answerText` IS NOT NULL ' +
      'AND `questionId` =  ' + questionId + ' AND `placeId` = ' + placeId;
    var ds = Givenanswer.dataSource;
    utilities.sendSql(ds,query,cb);
  };



  /**
   * Get the average score for a rating question
   * @param questionId the id belonging to the openquestion
   * @param placeId the placeid of the place where the question was answered
   * @param cb the callback
   */
  Givenanswer.getAverageRating = function(questionId, placeId, cb) {
    var query = 'SELECT AVG(`rating`) AS average FROM GivenAnswer ' +
      'WHERE GivenAnswer.questionId = ' + questionId +
      ' AND GivenAnswer.placeId = ' + placeId;
    var ds = Givenanswer.dataSource;
    utilities.sendSql(ds, query, cb);
  };

  Givenanswer.remoteMethod(
    'getAmountAnsweredByMultipleChoice', {
      description: 'Get a list of how many times certain answers' +
      ' have been given by an open question',
      http: {
        path: '/multiple-choice-question-answers/:qid/:pid',
        verb: 'get',
        errorStatus: '400'
      },
      accepts: [
        {
          arg: 'qid',
          description: 'question id',
          type: 'string',
          required: true
        },
        {
          arg: 'pid',
          description: 'place id',
          type: 'string',
          required: true
        }
      ],
      returns: {
        arg: 'code',
        type: 'array',
        root: true
      }
    }
  );

  Givenanswer.remoteMethod(
    'getOpenAnswers', {
      description: 'Get a list of all the given answers on an open question',
      http: {
        path: '/open-question-answers/:qid/:pid',
        verb: 'get',
        errorStatus: '400'
      },
      accepts: [
        {
          arg: 'qid',
          description: 'question id',
          type: 'string',
          required: true
        },
        {
          arg: 'pid',
          description: 'place id',
          type: 'string',
          required: true
        }
      ],
      returns: {
        arg: 'code',
        type: 'array',
        root: true
      }
    }
  );


  Givenanswer.remoteMethod(
    'getAverageRating', {
      description: 'Get the average rating for a rating question',
      http: {
        path: '/get-average/:qid/:pid',
        verb: 'get',
        errorStatus: '400'
      },
      accepts: [
        {
          arg: 'qid',
          description: 'question id',
          type: 'string',
          required: true
        },
        {
          arg: 'pid',
          description: 'place id',
          type: 'string',
          required: true
        }
      ],
      returns: {
        arg: 'code',
        type: 'array',
        root: true
      }
    }
  );

};
