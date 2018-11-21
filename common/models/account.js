'use strict';

module.exports = function (Account) {
  var app = require('../../server/server');

  var isStatic = true;
  Account.disableRemoteMethodByName('replaceOrCreate', isStatic);
  Account.disableRemoteMethodByName('prototype.patchAttributes', isStatic);
  Account.disableRemoteMethodByName('prototype.updateAttributes', isStatic);
  Account.disableRemoteMethodByName('findById', isStatic);
  Account.disableRemoteMethodByName('exists', isStatic);
  Account.disableRemoteMethodByName('count', isStatic);
  Account.disableRemoteMethodByName('find', isStatic);
  Account.disableRemoteMethodByName('findOne', isStatic);
  Account.disableRemoteMethodByName('upsert', isStatic);
  Account.disableRemoteMethodByName('upsertWithWhere', isStatic);
  Account.disableRemoteMethodByName('updateAll', isStatic);
  Account.disableRemoteMethodByName('replaceById', isStatic);
  Account.disableRemoteMethodByName('deleteById', isStatic);
  Account.disableRemoteMethodByName('createChangeStream', isStatic);

  Account.disableRemoteMethodByName('prototype.__findById__answers', isStatic);
  Account.disableRemoteMethodByName('prototype.__destroyById__answers', isStatic);
  Account.disableRemoteMethodByName('prototype.__updateById__answers', isStatic);
  Account.disableRemoteMethodByName('prototype.__get__answers', isStatic);
  Account.disableRemoteMethodByName('prototype.__create__answers', isStatic);
  Account.disableRemoteMethodByName('prototype.__delete__answers', isStatic);
  Account.disableRemoteMethodByName('prototype.__count__answers', isStatic);
  Account.disableRemoteMethodByName('prototype.__exists__answers', isStatic);
  Account.disableRemoteMethodByName('prototype.__link__answers', isStatic);
  Account.disableRemoteMethodByName('prototype.__unlink__answers', isStatic);

  Account.disableRemoteMethodByName('prototype.__findById__answers__accounts', isStatic);
  Account.disableRemoteMethodByName('prototype.__destroyById__answers__accounts', isStatic);
  Account.disableRemoteMethodByName('prototype.__updateById__answers__accounts', isStatic);
  Account.disableRemoteMethodByName('prototype.__get__answers__accounts', isStatic);
  Account.disableRemoteMethodByName('prototype.__create__answers__accounts', isStatic);
  Account.disableRemoteMethodByName('prototype.__delete__answers__accounts', isStatic);
  Account.disableRemoteMethodByName('prototype.__count__answers__accounts', isStatic);
  Account.disableRemoteMethodByName('prototype.__exists__answers__accounts', isStatic);
  Account.disableRemoteMethodByName('prototype.__link__answers__accounts', isStatic);
  Account.disableRemoteMethodByName('prototype.__unlink__answers__accounts', isStatic);

  Account.disableRemoteMethodByName('prototype.__findById__answers__questions', isStatic);
  Account.disableRemoteMethodByName('prototype.__destroyById__answers__questions', isStatic);
  Account.disableRemoteMethodByName('prototype.__updateById__answers__questions', isStatic);
  Account.disableRemoteMethodByName('prototype.__get__answers__questions', isStatic);
  Account.disableRemoteMethodByName('prototype.__create__answers__questions', isStatic);
  Account.disableRemoteMethodByName('prototype.__delete__answers__questions', isStatic);
  Account.disableRemoteMethodByName('prototype.__count__answers__questions', isStatic);
  Account.disableRemoteMethodByName('prototype.__exists__answers__questions', isStatic);
  Account.disableRemoteMethodByName('prototype.__link__answers__questions', isStatic);
  Account.disableRemoteMethodByName('prototype.__unlink__answers__questions', isStatic);

  Account.disableRemoteMethodByName('prototype.__findById__places', isStatic);
  Account.disableRemoteMethodByName('prototype.__destroyById__places', isStatic);
  Account.disableRemoteMethodByName('prototype.__updateById__places', isStatic);
  Account.disableRemoteMethodByName('prototype.__get__places', isStatic);
  Account.disableRemoteMethodByName('prototype.__create__places', isStatic);
  Account.disableRemoteMethodByName('prototype.__delete__places', isStatic);
  Account.disableRemoteMethodByName('prototype.__count__places', isStatic);
  Account.disableRemoteMethodByName('prototype.__exists__places', isStatic);
  Account.disableRemoteMethodByName('prototype.__link__places', isStatic);
  Account.disableRemoteMethodByName('prototype.__unlink__places', isStatic);

  Account.disableRemoteMethodByName('prototype.__findById__places__campaigns', isStatic);
  Account.disableRemoteMethodByName('prototype.__destroyById__places__campaigns', isStatic);
  Account.disableRemoteMethodByName('prototype.__updateById__places__campaigns', isStatic);
  Account.disableRemoteMethodByName('prototype.__get__places__campaigns', isStatic);
  Account.disableRemoteMethodByName('prototype.__create__places__campaigns', isStatic);
  Account.disableRemoteMethodByName('prototype.__delete__places__campaigns', isStatic);
  Account.disableRemoteMethodByName('prototype.__count__places__campaigns', isStatic);
  Account.disableRemoteMethodByName('prototype.__exists__places__campaigns', isStatic);
  Account.disableRemoteMethodByName('prototype.__link__places__campaigns', isStatic);
  Account.disableRemoteMethodByName('prototype.__unlink__places__campaigns', isStatic);

  Account.disableRemoteMethodByName('prototype.__findById__questions', isStatic);
  Account.disableRemoteMethodByName('prototype.__destroyById__questions', isStatic);
  Account.disableRemoteMethodByName('prototype.__updateById__questions', isStatic);
  Account.disableRemoteMethodByName('prototype.__get__questions', isStatic);
  Account.disableRemoteMethodByName('prototype.__create__questions', isStatic);
  Account.disableRemoteMethodByName('prototype.__delete__questions', isStatic);
  Account.disableRemoteMethodByName('prototype.__count__questions', isStatic);
  Account.disableRemoteMethodByName('prototype.__exists__questions', isStatic);
  Account.disableRemoteMethodByName('prototype.__link__questions', isStatic);
  Account.disableRemoteMethodByName('prototype.__unlink__questions', isStatic);

  Account.disableRemoteMethodByName('prototype.__findById__questions__accounts', isStatic);
  Account.disableRemoteMethodByName('prototype.__destroyById__questions__accounts', isStatic);
  Account.disableRemoteMethodByName('prototype.__updateById__questions__accounts', isStatic);
  Account.disableRemoteMethodByName('prototype.__get__questions__accounts', isStatic);
  Account.disableRemoteMethodByName('prototype.__create__questions__accounts', isStatic);
  Account.disableRemoteMethodByName('prototype.__delete__questions__accounts', isStatic);
  Account.disableRemoteMethodByName('prototype.__count__questions__accounts', isStatic);
  Account.disableRemoteMethodByName('prototype.__exists__questions__accounts', isStatic);
  Account.disableRemoteMethodByName('prototype.__link__questions__accounts', isStatic);
  Account.disableRemoteMethodByName('prototype.__unlink__questions__accounts', isStatic);

  Account.disableRemoteMethodByName('prototype.__get__questions__campaign', isStatic);
  Account.disableRemoteMethodByName('prototype.__get__questions__category', isStatic);
  Account.disableRemoteMethodByName('prototype.__get__questions__language', isStatic);
  Account.disableRemoteMethodByName('prototype.__get__questions__Language', isStatic);

  Account.disableRemoteMethodByName('prototype.__findById__questions__answers', isStatic);
  Account.disableRemoteMethodByName('prototype.__destroyById__questions__answers', isStatic);
  Account.disableRemoteMethodByName('prototype.__updateById__questions__answers', isStatic);
  Account.disableRemoteMethodByName('prototype.__get__questions__answers', isStatic);
  Account.disableRemoteMethodByName('prototype.__create__questions__answers', isStatic);
  Account.disableRemoteMethodByName('prototype.__delete__questions__answers', isStatic);
  Account.disableRemoteMethodByName('prototype.__count__questions__answers', isStatic);
  Account.disableRemoteMethodByName('prototype.__exists__questions__answers', isStatic);
  Account.disableRemoteMethodByName('prototype.__link__questions__answers', isStatic);
  Account.disableRemoteMethodByName('prototype.__unlink__questions__answers', isStatic);

  /**
   * Remove the user from the db and all the answers he/she has given
   * @param accountId the id belonging to the user
   * @param cb callback
   */
  Account.removeAccount = function (accountId, cb) {
    var ac = app.models.Account;
    ac.destroyAll({id: accountId}, function (err) {
      if (err) {
        console.error(err);
        cb(err);
      }
      else {
        var gv = app.models.GivenAnswer;
        gv.destroyAll({accountId: accountId});
        cb();
      }
    })
  };

  Account.remoteMethod(
    'removeAccount', {
      description: "Remove an account",
      http: {
        path: '/remove/:aid',
        verb: 'delete',
        errorStatus: '400'
      },
      accepts: [
        {
          arg: 'aid',
          description: 'account ID',
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

};
