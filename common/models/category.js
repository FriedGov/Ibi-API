'use strict';

module.exports = function(Category) {
  var isStatic = true;
  Category.disableRemoteMethodByName('prototype.patchAttributes', isStatic);
  Category.disableRemoteMethodByName('prototype.updateAttributes', isStatic);
  Category.disableRemoteMethodByName('exists', isStatic);
  Category.disableRemoteMethodByName('count', isStatic);
  Category.disableRemoteMethodByName('findOne', isStatic);
  Category.disableRemoteMethodByName('upsert', isStatic);
  Category.disableRemoteMethodByName('upsertWithWhere', isStatic);
  Category.disableRemoteMethodByName('updateAll', isStatic);
  Category.disableRemoteMethodByName('replaceById', isStatic);
  Category.disableRemoteMethodByName('createChangeStream', isStatic);

  Category.disableRemoteMethodByName('prototype.__findById__questions', isStatic);
  Category.disableRemoteMethodByName('prototype.__destroyById__questions', isStatic);
  Category.disableRemoteMethodByName('prototype.__updateById__questions', isStatic);
  Category.disableRemoteMethodByName('prototype.__get__questions', isStatic);
  Category.disableRemoteMethodByName('prototype.__create__questions', isStatic);
  Category.disableRemoteMethodByName('prototype.__delete__questions', isStatic);
  Category.disableRemoteMethodByName('prototype.__count__questions', isStatic);
  Category.disableRemoteMethodByName('prototype.__exists__questions', isStatic);
  Category.disableRemoteMethodByName('prototype.__link__questions', isStatic);
  Category.disableRemoteMethodByName('prototype.__unlink__questions', isStatic);

  Category.disableRemoteMethodByName('prototype.__get__questions__category', isStatic);
  Category.disableRemoteMethodByName('prototype.__get__questions__language', isStatic);
  Category.disableRemoteMethodByName('prototype.__get__questions__Language', isStatic);
};
