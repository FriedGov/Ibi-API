'use strict';

module.exports = function(CampaignPlaces) {
  var isStatic = true;
  CampaignPlaces.disableRemoteMethodByName('replaceOrCreate', isStatic);
  CampaignPlaces.disableRemoteMethodByName('prototype.patchAttributes', isStatic);
  CampaignPlaces.disableRemoteMethodByName('prototype.updateAttributes', isStatic);
  CampaignPlaces.disableRemoteMethodByName('exists', isStatic);
  CampaignPlaces.disableRemoteMethodByName('count', isStatic);
  CampaignPlaces.disableRemoteMethodByName('findById', isStatic);
  CampaignPlaces.disableRemoteMethodByName('findOne', isStatic);
  CampaignPlaces.disableRemoteMethodByName('upsert', isStatic);
  CampaignPlaces.disableRemoteMethodByName('upsertWithWhere', isStatic);
  CampaignPlaces.disableRemoteMethodByName('updateAll', isStatic);
  CampaignPlaces.disableRemoteMethodByName('replaceById', isStatic);
  CampaignPlaces.disableRemoteMethodByName('createChangeStream', isStatic);

  CampaignPlaces.disableRemoteMethodByName('prototype.__get__campaign', isStatic);
  CampaignPlaces.disableRemoteMethodByName('prototype.__get__campaign__questions', isStatic);
  CampaignPlaces.disableRemoteMethodByName('prototype.__get__place', isStatic);

  CampaignPlaces.disableRemoteMethodByName('prototype.__findById__place__campaigns', isStatic);
  CampaignPlaces.disableRemoteMethodByName('prototype.__destroyById__place__campaigns', isStatic);
  CampaignPlaces.disableRemoteMethodByName('prototype.__updateById__place__campaigns', isStatic);
  CampaignPlaces.disableRemoteMethodByName('prototype.__get__place__campaigns', isStatic);
  CampaignPlaces.disableRemoteMethodByName('prototype.__create__place__campaigns', isStatic);
  CampaignPlaces.disableRemoteMethodByName('prototype.__delete__place__campaigns', isStatic);
  CampaignPlaces.disableRemoteMethodByName('prototype.__count__place__campaigns', isStatic);
  CampaignPlaces.disableRemoteMethodByName('prototype.__exists__place__campaigns', isStatic);
  CampaignPlaces.disableRemoteMethodByName('prototype.__link__place__campaigns', isStatic);
  CampaignPlaces.disableRemoteMethodByName('prototype.__unlink__place__campaigns', isStatic);
};
