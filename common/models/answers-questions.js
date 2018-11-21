'use strict';

module.exports = function(AnswersQuestions) {
  var isStatic = true;

  AnswersQuestions.disableRemoteMethodByName('replaceOrCreate', isStatic);
  AnswersQuestions.disableRemoteMethodByName('prototype.patchAttributes', isStatic);
  AnswersQuestions.disableRemoteMethodByName('prototype.updateAttributes', isStatic);
  AnswersQuestions.disableRemoteMethodByName('findById', isStatic);
  AnswersQuestions.disableRemoteMethodByName('exists', isStatic);
  AnswersQuestions.disableRemoteMethodByName('create', isStatic);
  AnswersQuestions.disableRemoteMethodByName('count', isStatic);
  AnswersQuestions.disableRemoteMethodByName('find', isStatic);
  AnswersQuestions.disableRemoteMethodByName('findOne', isStatic);
  AnswersQuestions.disableRemoteMethodByName('upsert', isStatic);
  AnswersQuestions.disableRemoteMethodByName('upsertWithWhere', isStatic);
  AnswersQuestions.disableRemoteMethodByName('updateAll', isStatic);
  AnswersQuestions.disableRemoteMethodByName('replaceById', isStatic);
  AnswersQuestions.disableRemoteMethodByName('deleteById', isStatic);
  AnswersQuestions.disableRemoteMethodByName('createChangeStream', isStatic);

  AnswersQuestions.disableRemoteMethodByName('prototype.__get__answer', isStatic);
  AnswersQuestions.disableRemoteMethodByName('prototype.__get__question', isStatic);

  AnswersQuestions.disableRemoteMethodByName('prototype.__findById__question__answers', isStatic);
  AnswersQuestions.disableRemoteMethodByName('prototype.__destroyById__question__answers', isStatic);
  AnswersQuestions.disableRemoteMethodByName('prototype.__updateById__question__answers', isStatic);
  AnswersQuestions.disableRemoteMethodByName('prototype.__get__question__answers', isStatic);
  AnswersQuestions.disableRemoteMethodByName('prototype.__create__question__answers', isStatic);
  AnswersQuestions.disableRemoteMethodByName('prototype.__delete__question__answers', isStatic);
  AnswersQuestions.disableRemoteMethodByName('prototype.__count__question__answers', isStatic);
  AnswersQuestions.disableRemoteMethodByName('prototype.__exists__question__answers', isStatic);
  AnswersQuestions.disableRemoteMethodByName('prototype.__link__question__answers', isStatic);
  AnswersQuestions.disableRemoteMethodByName('prototype.__unlink__question__answers', isStatic);

  AnswersQuestions.disableRemoteMethodByName('prototype.__get__question__category', isStatic);
  AnswersQuestions.disableRemoteMethodByName('prototype.__get__question__language', isStatic);
  AnswersQuestions.disableRemoteMethodByName('prototype.__get__question__Language', isStatic);
};
