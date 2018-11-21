'use strict';

module.exports = function(Place) {
    var isStatic = true;
    Place.disableRemoteMethodByName('prototype.patchAttributes', isStatic);
    Place.disableRemoteMethodByName('prototype.updateAttributes', isStatic);
    Place.disableRemoteMethodByName('exists', isStatic);
    Place.disableRemoteMethodByName('count', isStatic);
    Place.disableRemoteMethodByName('findOne', isStatic);
    Place.disableRemoteMethodByName('upsert', isStatic);
    Place.disableRemoteMethodByName('upsertWithWhere', isStatic);
    Place.disableRemoteMethodByName('updateAll', isStatic);
    Place.disableRemoteMethodByName('replaceById', isStatic);
    Place.disableRemoteMethodByName('createChangeStream', isStatic);

    Place.disableRemoteMethodByName('prototype.__findById__campaigns', isStatic);
    Place.disableRemoteMethodByName('prototype.__destroyById__campaigns', isStatic);
    Place.disableRemoteMethodByName('prototype.__updateById__campaigns', isStatic);
    Place.disableRemoteMethodByName('prototype.__get__campaigns', isStatic);
    Place.disableRemoteMethodByName('prototype.__create__campaigns', isStatic);
    Place.disableRemoteMethodByName('prototype.__delete__campaigns', isStatic);
    Place.disableRemoteMethodByName('prototype.__count__campaigns', isStatic);
    Place.disableRemoteMethodByName('prototype.__exists__campaigns', isStatic);
    Place.disableRemoteMethodByName('prototype.__link__campaigns', isStatic);
    Place.disableRemoteMethodByName('prototype.__unlink__campaigns', isStatic);
  
    Place.disableRemoteMethodByName('prototype.__get__campaigns__questions', isStatic);
};
