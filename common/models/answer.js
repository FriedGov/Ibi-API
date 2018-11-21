'use strict';

module.exports = function (Answer) {
  var app = require('../../server/server');
  var utilities = require('../../server/utilities');

  var isStatic = true;
  Answer.disableRemoteMethodByName('replaceOrCreate', isStatic);
  Answer.disableRemoteMethodByName('prototype.patchAttributes', isStatic);
  Answer.disableRemoteMethodByName('prototype.updateAttributes', isStatic);
  Answer.disableRemoteMethodByName('findById', isStatic);
  Answer.disableRemoteMethodByName('exists', isStatic);
  Answer.disableRemoteMethodByName('create', isStatic);
  Answer.disableRemoteMethodByName('count', isStatic);
  Answer.disableRemoteMethodByName('find', isStatic);
  Answer.disableRemoteMethodByName('findOne', isStatic);
  Answer.disableRemoteMethodByName('upsert', isStatic);
  Answer.disableRemoteMethodByName('upsertWithWhere', isStatic);
  Answer.disableRemoteMethodByName('updateAll', isStatic);
  Answer.disableRemoteMethodByName('replaceById', isStatic);
  Answer.disableRemoteMethodByName('deleteById', isStatic);
  Answer.disableRemoteMethodByName('createChangeStream', isStatic);

  Answer.disableRemoteMethodByName('prototype.__findById__accounts', isStatic);
  Answer.disableRemoteMethodByName('prototype.__destroyById__accounts', isStatic);
  Answer.disableRemoteMethodByName('prototype.__updateById__accounts', isStatic);
  Answer.disableRemoteMethodByName('prototype.__get__accounts', isStatic);
  Answer.disableRemoteMethodByName('prototype.__create__accounts', isStatic);
  Answer.disableRemoteMethodByName('prototype.__delete__accounts', isStatic);
  Answer.disableRemoteMethodByName('prototype.__count__accounts', isStatic);
  Answer.disableRemoteMethodByName('prototype.__exists__accounts', isStatic);
  Answer.disableRemoteMethodByName('prototype.__link__accounts', isStatic);
  Answer.disableRemoteMethodByName('prototype.__unlink__accounts', isStatic);

  Answer.disableRemoteMethodByName('prototype.__findById__places', isStatic);
  Answer.disableRemoteMethodByName('prototype.__destroyById__places', isStatic);
  Answer.disableRemoteMethodByName('prototype.__updateById__places', isStatic);
  Answer.disableRemoteMethodByName('prototype.__get__places', isStatic);
  Answer.disableRemoteMethodByName('prototype.__create__places', isStatic);
  Answer.disableRemoteMethodByName('prototype.__delete__places', isStatic);
  Answer.disableRemoteMethodByName('prototype.__count__places', isStatic);
  Answer.disableRemoteMethodByName('prototype.__exists__places', isStatic);
  Answer.disableRemoteMethodByName('prototype.__link__places', isStatic);
  Answer.disableRemoteMethodByName('prototype.__unlink__places', isStatic);

  Answer.disableRemoteMethodByName('prototype.__findById__places__campaigns', isStatic);
  Answer.disableRemoteMethodByName('prototype.__destroyById__places__campaigns', isStatic);
  Answer.disableRemoteMethodByName('prototype.__updateById__places__campaigns', isStatic);
  Answer.disableRemoteMethodByName('prototype.__get__places__campaigns', isStatic);
  Answer.disableRemoteMethodByName('prototype.__create__places__campaigns', isStatic);
  Answer.disableRemoteMethodByName('prototype.__delete__places__campaigns', isStatic);
  Answer.disableRemoteMethodByName('prototype.__count__places__campaigns', isStatic);
  Answer.disableRemoteMethodByName('prototype.__exists__places__campaigns', isStatic);
  Answer.disableRemoteMethodByName('prototype.__link__places__campaigns', isStatic);
  Answer.disableRemoteMethodByName('prototype.__unlink__places__campaigns', isStatic);

  Answer.disableRemoteMethodByName('prototype.__findById__questions', isStatic);
  Answer.disableRemoteMethodByName('prototype.__destroyById__questions', isStatic);
  Answer.disableRemoteMethodByName('prototype.__updateById__questions', isStatic);
  Answer.disableRemoteMethodByName('prototype.__get__questions', isStatic);
  Answer.disableRemoteMethodByName('prototype.__create__questions', isStatic);
  Answer.disableRemoteMethodByName('prototype.__delete__questions', isStatic);
  Answer.disableRemoteMethodByName('prototype.__count__questions', isStatic);
  Answer.disableRemoteMethodByName('prototype.__exists__questions', isStatic);
  Answer.disableRemoteMethodByName('prototype.__link__questions', isStatic);
  Answer.disableRemoteMethodByName('prototype.__unlink__questions', isStatic);

  Answer.disableRemoteMethodByName('prototype.__findById__questions__answers', isStatic);
  Answer.disableRemoteMethodByName('prototype.__destroyById__questions__answers', isStatic);
  Answer.disableRemoteMethodByName('prototype.__updateById__questions__answers', isStatic);
  Answer.disableRemoteMethodByName('prototype.__get__questions__answers', isStatic);
  Answer.disableRemoteMethodByName('prototype.__create__questions__answers', isStatic);
  Answer.disableRemoteMethodByName('prototype.__delete__questions__answers', isStatic);
  Answer.disableRemoteMethodByName('prototype.__count__questions__answers', isStatic);
  Answer.disableRemoteMethodByName('prototype.__exists__questions__answers', isStatic);
  Answer.disableRemoteMethodByName('prototype.__link__questions__answers', isStatic);
  Answer.disableRemoteMethodByName('prototype.__unlink__questions__answers', isStatic);
  
  Answer.disableRemoteMethodByName('prototype.__get__questions__category', isStatic);
  Answer.disableRemoteMethodByName('prototype.__get__questions__language', isStatic);
  Answer.disableRemoteMethodByName('prototype.__get__questions__Language', isStatic);

  /**
   * Remove an answer from the db(Answer belonging to a multiple choice question)
   * @param answerId the ide of the answer
   * @param cb the callback
   */
  Answer.removeAnswer = function(answerId, cb) {
    var ans = app.models.Answer;
    ans.destroyAll({id: answerId}, function (err) {
      if (err) {
        console.error(err);
        cb(err);
      }
      else {
        var as = app.models.AnswersQuestions;
        as.destroyAll({answerId: answerId});
        var gv = app.models.GivenAnswer;
        gv.destroyAll({answerId: answerId});
        cb();
      }
    });
  };

  /**
   *
   * @param lId The language
   * @param txt The text of the answer
   * @param qId The question that is answered
   * @param accountId The account of the user that gave the answer
   * @param placeId the place where the answer was given
   * @param time the date and time the answer was given
   * @param cb the callback
   */
  Answer.answerOpenQuestion = function (lId, txt, qId, accountId, placeId, time, cb) {
    var gaModel = app.models.GivenAnswer;
    var gaQuery = {questionId: qId, answerText: txt, accountId: accountId, placeId: placeId, time: time};
    utilities.add(gaModel, gaQuery, cb, function () {
      cb();
    });
  };


  /**
   * Answer a rating question
   * @param lId the languageId
   * @param rating the amount rated
   * @param qId the question idea belonging to the question answered
   * @param accountId the id of the user that gave the answer
   * @param placeId the place where the answer was given
   * @param time the time the answer was given
   * @param cb the callback
   */
  Answer.answerRatingQuestion = function (lId, rating, qId, accountId, placeId, time, cb) {
    var gaModel = app.models.GivenAnswer;
    var gaQuery = {
      questionId: qId, rating: rating,
      accountId: accountId, placeId: placeId, time: time
    };
    utilities.add(gaModel, gaQuery, cb, function () {
      var query = 'SELECT AVG(`rating`) AS average FROM GivenAnswer ' +
        'WHERE GivenAnswer.questionId = ' + qId +
        ' AND GivenAnswer.placeId = ' + placeId;
      var ds = Answer.dataSource;
      utilities.sendSql(ds, query, cb);
    });
  };

  /**
   * Add an answer to a multiple choice question(do not confuse this with an answer given by a user. This is meant for possible answers for a multiple choice question)
   * @param qId the question id of the question where the answer belongs to
   * @param lId the language of the answer
   * @param txt the text if the answer
   * @param cb the callback
   */
  Answer.addAnswer = function addAnswer(qId, lId, txt, cb) {
    var answerModel = app.models.Answer;
    utilities.add(answerModel, {text: txt, languageId: lId}, cb, function (doc) {
      var jsonObject = doc.toJSON();
      var answerId = utilities.jsonParser(jsonObject, 'id');
      var aqModel = app.models.AnswersQuestions;
      var aqQuery = {answerId: answerId, questionId: qId};
      utilities.add(aqModel, aqQuery, cb, function () {
        cb("", jsonObject);
      });
    });
  };


  Answer.remoteMethod(
    'removeAnswer', {
      description: "Remove an answer",
      http: {
        path: '/remove/:aid',
        verb: 'delete',
        errorStatus: '400'
      },
      accepts: [
        {
          arg: 'aid',
          description: 'answer ID',
          type: 'number',
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

  Answer.remoteMethod(
    'answerOpenQuestion', {
      description: "Answer an open question",
      http: {
        path: '/answeropen',
        verb: 'post',
        errorStatus: '400'
      },
      accepts: [
        {
          arg: 'languageId',
          description: 'language ID',
          type: 'number',
          required: true
        }
        ,
        {
          arg: 'text',
          description: 'answer text',
          type: 'string',
          required: true
        }
        ,
        {
          arg: 'questionId',
          description: 'question id',
          type: 'number',
          required: true
        }
        ,
        {
          arg: 'accountId',
          description: 'answer text',
          type: 'number',
          required: true
        }
        ,
        {
          arg: 'placeId',
          description: 'answer text',
          type: 'number',
          required: true
        }
        ,
        {
          arg: 'time',
          description: 'time',
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

  Answer.remoteMethod(
    'answerRatingQuestion', {
      description: "Answer a rating question",
      http: {
        path: '/answer-rating',
        verb: 'post',
        errorStatus: '400'
      },
      accepts: [
        {
          arg: 'languageId',
          description: 'language ID',
          type: 'number',
          required: true
        }
        ,
        {
          arg: 'rating',
          description: 'answer text',
          type: 'number',
          datatype: 'decimal',
          scale: 2,
          required: true
        }
        ,
        {
          arg: 'questionId',
          description: 'question id',
          type: 'number',
          required: true
        }
        ,
        {
          arg: 'accountId',
          description: 'answer text',
          type: 'number',
          required: true
        }
        ,
        {
          arg: 'placeId',
          description: 'answer text',
          type: 'number',
          required: true
        }
        ,
        {
          arg: 'time',
          description: 'time',
          type: 'string',
          required: true
        }

      ],
      returns: {
        arg: 'code',
        type: 'object',
        root: true
      }
    }
  );


  Answer.remoteMethod(
    'addAnswer', {
      description: "Add a new answer to a multiple choice question. (do not confuse this with an answer given by a user. This is meant for possible answers for a multiple choice question)",
      http: {
        path: '/add',
        verb: 'post',
        errorStatus: '400'
      },
      accepts: [
        {
          arg: 'questionId',
          description: 'Question ID',
          type: 'number',
          required: true
        },
        {
          arg: 'languageId',
          description: 'Language ID',
          type: 'number',
          required: true
        },
        {
          arg: 'text',
          description: 'Answer text',
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
