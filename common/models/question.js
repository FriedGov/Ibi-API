'use strict';

module.exports = function (Question) {
  var app = require('../../server/server');
  var utilities = require('../../server/utilities');

  var isStatic = true;
  Question.disableRemoteMethodByName('replaceOrCreate', isStatic);
  Question.disableRemoteMethodByName('prototype.patchAttributes', isStatic);
  Question.disableRemoteMethodByName('prototype.updateAttributes', isStatic);
  Question.disableRemoteMethodByName('exists', isStatic);
  Question.disableRemoteMethodByName('create', isStatic);
  Question.disableRemoteMethodByName('count', isStatic);
  Question.disableRemoteMethodByName('find', isStatic);
  Question.disableRemoteMethodByName('findOne', isStatic);
  Question.disableRemoteMethodByName('findById', isStatic);
  Question.disableRemoteMethodByName('deleteById', isStatic);
  Question.disableRemoteMethodByName('upsert', isStatic);
  Question.disableRemoteMethodByName('upsertWithWhere', isStatic);
  Question.disableRemoteMethodByName('updateAll', isStatic);
  Question.disableRemoteMethodByName('replaceById', isStatic);
  Question.disableRemoteMethodByName('createChangeStream', isStatic);

  Question.disableRemoteMethodByName('prototype.__findById__accounts', isStatic);
  Question.disableRemoteMethodByName('prototype.__destroyById__accounts', isStatic);
  Question.disableRemoteMethodByName('prototype.__updateById__accounts', isStatic);
  Question.disableRemoteMethodByName('prototype.__get__accounts', isStatic);
  Question.disableRemoteMethodByName('prototype.__create__accounts', isStatic);
  Question.disableRemoteMethodByName('prototype.__delete__accounts', isStatic);
  Question.disableRemoteMethodByName('prototype.__count__accounts', isStatic);
  Question.disableRemoteMethodByName('prototype.__exists__accounts', isStatic);
  Question.disableRemoteMethodByName('prototype.__link__accounts', isStatic);
  Question.disableRemoteMethodByName('prototype.__unlink__accounts', isStatic);

  Question.disableRemoteMethodByName('prototype.__findById__answers', isStatic);
  Question.disableRemoteMethodByName('prototype.__destroyById__answers', isStatic);
  Question.disableRemoteMethodByName('prototype.__updateById__answers', isStatic);
  Question.disableRemoteMethodByName('prototype.__create__answers', isStatic);
  Question.disableRemoteMethodByName('prototype.__delete__answers', isStatic);
  Question.disableRemoteMethodByName('prototype.__count__answers', isStatic);
  Question.disableRemoteMethodByName('prototype.__exists__answers', isStatic);
  Question.disableRemoteMethodByName('prototype.__link__answers', isStatic);
  Question.disableRemoteMethodByName('prototype.__unlink__answers', isStatic);

  Question.disableRemoteMethodByName('prototype.__findById__language', isStatic);
  Question.disableRemoteMethodByName('prototype.__destroyById__language', isStatic);
  Question.disableRemoteMethodByName('prototype.__updateById__language', isStatic);
  Question.disableRemoteMethodByName('prototype.__get__language', isStatic);
  Question.disableRemoteMethodByName('prototype.__create__language', isStatic);
  Question.disableRemoteMethodByName('prototype.__delete__language', isStatic);
  Question.disableRemoteMethodByName('prototype.__count__language', isStatic);
  Question.disableRemoteMethodByName('prototype.__exists__language', isStatic);
  Question.disableRemoteMethodByName('prototype.__link__language', isStatic);
  Question.disableRemoteMethodByName('prototype.__unlink__language', isStatic);

  Question.disableRemoteMethodByName('prototype.__get__Language', isStatic);
  Question.disableRemoteMethodByName('prototype.__get__category', isStatic);
  Question.disableRemoteMethodByName('prototype.__get__campaign', isStatic);
  Question.disableRemoteMethodByName('prototype.__get__campaign__questions', isStatic);

  Question.disableRemoteMethodByName('prototype.__findById__language__languages', isStatic);
  Question.disableRemoteMethodByName('prototype.__destroyById__language__languages', isStatic);
  Question.disableRemoteMethodByName('prototype.__updateById__language__languages', isStatic);
  Question.disableRemoteMethodByName('prototype.__get__language__languages', isStatic);
  Question.disableRemoteMethodByName('prototype.__update__language__languages', isStatic);
  Question.disableRemoteMethodByName('prototype.__create__language__languages', isStatic);
  Question.disableRemoteMethodByName('prototype.__delete__language__languages', isStatic);
  Question.disableRemoteMethodByName('prototype.__destroy__language__languages', isStatic);
  Question.disableRemoteMethodByName('prototype.__count__language__languages', isStatic);
  Question.disableRemoteMethodByName('prototype.__exists__language__languages', isStatic);
  Question.disableRemoteMethodByName('prototype.__link__language__languages', isStatic);
  Question.disableRemoteMethodByName('prototype.__unlink__language__languages', isStatic);

  Question.disableRemoteMethodByName('prototype.__findById__Language__languages', isStatic);
  Question.disableRemoteMethodByName('prototype.__destroyById__Language__languages', isStatic);
  Question.disableRemoteMethodByName('prototype.__updateById__Language__languages', isStatic);
  Question.disableRemoteMethodByName('prototype.__get__Language__languages', isStatic);
  Question.disableRemoteMethodByName('prototype.__update__Language__languages', isStatic);
  Question.disableRemoteMethodByName('prototype.__create__Language__languages', isStatic);
  Question.disableRemoteMethodByName('prototype.__delete__Language__languages', isStatic);
  Question.disableRemoteMethodByName('prototype.__destroy__Language__languages', isStatic);
  Question.disableRemoteMethodByName('prototype.__count__Language__languages', isStatic);
  Question.disableRemoteMethodByName('prototype.__exists__Language__languages', isStatic);
  Question.disableRemoteMethodByName('prototype.__link__Language__languages', isStatic);
  Question.disableRemoteMethodByName('prototype.__unlink__Language__languages', isStatic);

  Question.disableRemoteMethodByName('prototype.__findById__language__questions', isStatic);
  Question.disableRemoteMethodByName('prototype.__destroyById__language__questions', isStatic);
  Question.disableRemoteMethodByName('prototype.__updateById__language__questions', isStatic);
  Question.disableRemoteMethodByName('prototype.__get__language__questions', isStatic);
  Question.disableRemoteMethodByName('prototype.__create__language__questions', isStatic);
  Question.disableRemoteMethodByName('prototype.__delete__language__questions', isStatic);
  Question.disableRemoteMethodByName('prototype.__count__language__questions', isStatic);
  Question.disableRemoteMethodByName('prototype.__exists__language__questions', isStatic);
  Question.disableRemoteMethodByName('prototype.__link__language__questions', isStatic);
  Question.disableRemoteMethodByName('prototype.__unlink__language__questions', isStatic);

  Question.disableRemoteMethodByName('prototype.__findById__Language__questions', isStatic);
  Question.disableRemoteMethodByName('prototype.__destroyById__Language__questions', isStatic);
  Question.disableRemoteMethodByName('prototype.__updateById__Language__questions', isStatic);
  Question.disableRemoteMethodByName('prototype.__get__Language__questions', isStatic);
  Question.disableRemoteMethodByName('prototype.__create__Language__questions', isStatic);
  Question.disableRemoteMethodByName('prototype.__delete__Language__questions', isStatic);
  Question.disableRemoteMethodByName('prototype.__count__Language__questions', isStatic);
  Question.disableRemoteMethodByName('prototype.__exists__Language__questions', isStatic);
  Question.disableRemoteMethodByName('prototype.__link__Language__questions', isStatic);
  Question.disableRemoteMethodByName('prototype.__unlink__Language__questions', isStatic);

  /**
   * Checks if there is a place belonging to the the given longitude and latitude and distance and checks if there are questions available
   * for the current user based on his accountd, languageId and location
   * @param languageId the language of the user
   * @param accountId of the user
   * @param latitude the latitude of the current position from the user
   * @param longitude the longitude  of the current position from the user
   * @param distance the max distance of how far the place can be from the current user(in km)
   * @param cb the callback
   */
  Question.getQuestionByLanguageAndAccountIdAndCampaignAndPlace = function findQuestionByLanguageAndCategory(languageId, accountId, latitude, longitude, distance, cb) {
    console.log("Language " + languageId);
    console.log("Accountid " +  accountId);
    var sql1 = 'SELECT id, name, image, latitude, longitude, (6371 * acos(cos(radians(' + latitude + ')) * cos(radians(latitude)) * cos(radians(longitude) - radians(' + longitude + ')) + sin(radians(' + latitude + ')) * sin(radians(latitude)))) as distance FROM Place HAVING distance < ' + distance + ' ORDER BY distance ASC LIMIT 1'
    var ds = Question.dataSource;
    var c = {};
    utilities.sendSql(ds, sql1, function (err, call) {
      if (err) {
        cb(err);
      }
      else if (call.length) {
        var placeId = call[0].id;
        console.log(placeId);
        var json1 = JSON.stringify(call);
        var sql = 'select * from Question  where Question.campaignId IN (select Campaign.id from Campaign WHERE (Campaign.startDate < NOW() OR Campaign.startDate = NOW()) AND Campaign.endDate > NOW()) AND (Question.placeId IS NULL OR Question.placeId = ' + placeId + ' )' +
          'AND Question.languageId = ' + languageId+ ' ' +
          'and Question.id NOT IN(select questionId from GivenAnswer WHERE GivenAnswer.accountId = ' + accountId + ' AND now()      <     DATE_ADD(time,INTERVAL 12 HOUR) AND GivenAnswer.placeId = ' + placeId + ' ) AND Question.campaignId IN ' +
          '(SELECT CampaignPlaces.campaignId FROM CampaignPlaces WHERE CampaignPlaces.placeId = ' + placeId + ')'
        utilities.sendSql(ds, sql, function (err, ca) {
          if (err) {
            cb(err);
          }
          else {
            var json2 = JSON.stringify(ca);
            c['questions'] = JSON.parse(json2);
            c['place'] = JSON.parse(json1);
            cb(err, c);
          }
        });
      }
      else {
        cb();
      }
    })
  };


  /**
   * Post a question with language, category, campaign, question type and description.
   * This question will be linked to the given place. And will be only asked at the given place if it is linked to
   * the campaign
   * @param languageId the language the question belongs to
   * @param categoryId the category the question belongs to
   * @param placeId the place the question will be linked to
   * @param campaignId the campaign where the question belongs to
   * @param questionType the type of question that is getting posted(open, multiple choice, ratings)
   * @param description of the question
   * @param cb callback
   */
  Question.postQuestionByLanguageAndCategoryAndPlaceCategory =
    function postQuestionByLanguageAndCategoryAndCampaign(languageId, categoryId, placeId, questionType, description, campaignId, cb) {
      var quest = app.models.Question;
      var createQuery = {
        languageId: languageId, categoryId: categoryId, description: description,
        questionType: questionType, placeId: placeId, campaignId: campaignId
      };
      var err;
      utilities.add(quest, createQuery, cb, function (doc) {
        var jsonObject = doc.toJSON();
        cb(err, jsonObject);
      })
    };

  /**
   * Post a question with language, category, campaign, question type and description.
   * This question will be question that's not linked to a place. So it will be asked
   * by each place belonging to the campaign
   * @param languageId the language the question belongs to
   * @param categoryId the category the question belongs to
   * @param campaignId the campaign where the question belongs to
   * @param questionType the type of question that is getting posted(open, multiple choice, ratings)
   * @param description of the question
   * @param cb callback
   */
  Question.postQuestionByLanguageAndCategoryAndCampaign =
    function postQuestionByLanguageAndCategoryAndCampaign(languageId, categoryId,  questionType, description, campaignId, cb) {
      var quest = app.models.Question;
      var createQuery = {
        languageId: languageId, categoryId: categoryId, description: description,
        questionType: questionType, campaignId: campaignId
      };
      var err;
      utilities.add(quest, createQuery, cb, function (doc) {
        var jsonObject = doc.toJSON();
        cb(err, jsonObject);
      })
    };

  /**
   * Remove a question and all his related data from the database
   * @param questionId the id belonging to the question
   * @param cb the callback
   */
  Question.removeQuestion = function (questionId, cb) {
    var quest = app.models.Question;
    var json = {questionId: questionId};
    var ds = Question.dataSource;
    utilities.remove(quest, json, function (err, doc) {
      if (err) {
        cb(err)
      }
      else {
        var sql = 'DELETE FROM Answer WHERE (Answer.id in (SELECT AnswersQuestions.answerId ' +
          'FROM AnswersQuestions where AnswersQuestions.questionId =' +
          ' ' + questionId + '))';
        utilities.sendSql(ds, sql, function (err) {
            if (err) {
              cb(err);
            }
            else {
              var as = app.models.AnswersQuestions;
              utilities.remove(as, json, function (err) {
                if (err) {
                  cb(err);
                }
                else {
                  var gv = app.models.GivenAnswer;
                  utilities.remove(gv, json, function (err) {
                    if (err) {
                      cb(err)
                    }
                    else {
                      cb();
                    }
                  });
                }
              })
            }
          }
        )
      }
    });
  };

  Question.remoteMethod(
    'findQuestionByDescription', {
      description: "Get question by description",
      http: {
        path: '/findquestionsbydescription/:desc',
        verb: 'get',
        errorStatus: '400'
      },
      accepts: [
        {
          arg: 'desc',
          description: 'description',
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


  Question.remoteMethod(
    'postQuestionByLanguageAndCategoryAndPlaceCategory', {
      description: "Post a question that's linked to a campaign and place",
      http: {
        path: '/add-question-to-place-and-campaign',
        verb: 'post',
        errorStatus: '400'
      },
      accepts: [

        {
          arg: 'lid',
          description: 'Language id',
          type: 'number',
          required: true
        },
        {
          arg: 'cid',
          description: 'Category id',
          type: 'number',
          required: true
        },
        {
          arg: 'paid',
          description: 'place id',
          type: 'number',
          required: true
        },
        {
          arg: 'qtype',
          description: 'Question type',
          type: 'string',
          required: true
        },
        {
          arg: 'desc',
          description: 'Description',
          type: 'string',
          required: true
        },
        {
          arg: 'cId',
          description: 'campaignId',
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

  Question.remoteMethod(
    'findQuestionByDescription', {
      description: "Get question by description",
      http: {
        path: '/findquestionsbydescription/:desc',
        verb: 'get',
        errorStatus: '400'
      },
      accepts: [
        {
          arg: 'desc',
          description: 'description',
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


  Question.remoteMethod(
    'postQuestionByLanguageAndCategoryAndPlaceCategory', {
      description: "Post question that's linked to a place and campaign",
      http: {
        path: '/add-question-to-place-and-campaign',
        verb: 'post',
        errorStatus: '400'
      },
      accepts: [

        {
          arg: 'lid',
          description: 'Language id',
          type: 'number',
          required: true
        },
        {
          arg: 'cid',
          description: 'Category id',
          type: 'number',
          required: true
        },
        {
          arg: 'paid',
          description: 'place id',
          type: 'number',
          required: true
        },
        {
          arg: 'qtype',
          description: 'Question type',
          type: 'string',
          required: true
        },
        {
          arg: 'desc',
          description: 'Description',
          type: 'string',
          required: true
        },
        {
          arg: 'cId',
          description: 'campaignId',
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


  Question.remoteMethod(
    'postQuestionByLanguageAndCategoryAndCampaign', {
      description: "post question by language id , category id and campaign id",
      http: {
        path: '/add-question-to-campaign/',
        verb: 'post',
        errorStatus: '400'
      },
      accepts: [

        {
          arg: 'lid',
          description: 'Language id',
          type: 'number',
          required: true
        },
        {
          arg: 'cid',
          description: 'Category id',
          type: 'number',
          required: true
        },
        {
          arg: 'qtype',
          description: 'Question type',
          type: 'string',
          required: true
        },
        {
          arg: 'desc',
          description: 'Description',
          type: 'string',
          required: true
        },
        {
          arg: 'cId',
          description: 'campaign id',
          type: 'number',
          required: true
        },
      ],
      returns: {
        arg: 'code',
        type: 'array',
        root: true
      }
    }
  );


  Question.remoteMethod(
    'removeQuestion', {
      description: "delete a question by id",
      http: {
        path: '/delete/:qid/',
        verb: 'delete',
        errorStatus: '400'
      },
      accepts: [
        {
          arg: 'qid',
          description: 'Question id',
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


  Question.remoteMethod(
    'getQuestionByLanguageAndAccountIdAndCampaignAndPlace', {
      description: "Get the place and questions belonging to the given language id, account id," +
      " latitude, longitude, and the max distance of the user",
      http: {
        path: '/:lid/:aid/:lat/:long/:dis',
        verb: 'get',
        errorStatus: '400'
      },
      accepts: [
        {
          arg: 'lid',
          description: 'language ID',
          type: 'number',
          required: true
        },
        {
          arg: 'aid',
          description: 'account id',
          type: 'number',
          required: true
        },
        {
          arg: 'lat',
          description: 'latitude',
          type: 'number',
          required: true
        },
        {
          arg: 'long',
          description: 'longitude',
          type: 'number',
          required: true
        }
        ,
        {
          arg: 'dis',
          description: 'distance in km',
          type: 'number',
          required: true
        }
      ],
      returns: {
        arg: 'code',
        type: 'array',
        root: true
      }
    });
};






