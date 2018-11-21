'use strict';

module.exports = function(Campaign) {
  var utilities = require('../../server/utilities');

  var isStatic = true;
  Campaign.disableRemoteMethodByName('replaceOrCreate', isStatic);
  Campaign.disableRemoteMethodByName('prototype.patchAttributes', isStatic);
  Campaign.disableRemoteMethodByName('prototype.updateAttributes', isStatic);
  Campaign.disableRemoteMethodByName('exists', isStatic);
  Campaign.disableRemoteMethodByName('count', isStatic);
  Campaign.disableRemoteMethodByName('findOne', isStatic);
  Campaign.disableRemoteMethodByName('upsert', isStatic);
  Campaign.disableRemoteMethodByName('upsertWithWhere', isStatic);
  Campaign.disableRemoteMethodByName('updateAll', isStatic);
  Campaign.disableRemoteMethodByName('replaceById', isStatic);
  Campaign.disableRemoteMethodByName('createChangeStream', isStatic);

  Campaign.disableRemoteMethodByName('prototype.__findById__places', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__destroyById__places', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__updateById__places', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__get__places', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__create__places', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__delete__places', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__count__places', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__exists__places', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__link__places', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__unlink__places', isStatic);

  Campaign.disableRemoteMethodByName('prototype.__findById__places__campaigns', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__destroyById__places__campaigns', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__updateById__places__campaigns', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__get__places__campaigns', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__create__places__campaigns', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__delete__places__campaigns', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__count__places__campaigns', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__exists__places__campaigns', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__link__places__campaigns', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__unlink__places__campaigns', isStatic);

  Campaign.disableRemoteMethodByName('prototype.__findById__questions', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__destroyById__questions', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__updateById__questions', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__create__questions', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__delete__questions', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__count__questions', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__exists__questions', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__link__questions', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__unlink__questions', isStatic);

  Campaign.disableRemoteMethodByName('prototype.__findById__questions__answers', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__destroyById__questions__answers', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__updateById__questions__answers', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__get__questions__answers', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__create__questions__answers', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__delete__questions__answers', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__count__questions__answers', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__exists__questions__answers', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__link__questions__answers', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__unlink__questions__answers', isStatic);

  Campaign.disableRemoteMethodByName('prototype.__get__questions__campaign', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__get__questions__category', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__get__questions__language', isStatic);
  Campaign.disableRemoteMethodByName('prototype.__get__questions__Language', isStatic);

  /**
   * Get all the campaigns that are active based on the current date
   * @param cb the callbacks
   */
  Campaign.getActiveCampaigns = function getActive(cb) {
    var query = 'SELECT * from Campaign ' +
      ' WHERE (`startDate` < NOW() OR `startDate` = NOW()) AND endDate > NOW()';
    var dataSource = Campaign.dataSource;
    utilities.sendSql(dataSource, query, cb);
  };

  /**
   * Get all the places that are linked to campaign
   * @param campaignId the id belonging to the campaign
   * @param cb the callback
   */
  Campaign.getPlacesBelongingToCampaign = function(campaignId, cb){
    var query = 'SELECT Place.id,Place.longitude, Place.latitude, Place.image, Place.name FROM Place INNER JOIN CampaignPlaces \n' +
      'ON CampaignPlaces.placeId = Place.id\n' +
      'INNER JOIN Campaign\n' +
      'ON Campaign.id = CampaignPlaces.campaignId\n' +
      'WHERE Campaign.id = ' +  campaignId;
    var dataSource = Campaign.dataSource;
    utilities.sendSql(dataSource,query,cb);
  };

  Campaign.remoteMethod(
    'getPlacesBelongingToCampaign', {
      description: 'Get all places belonging to campaign',
      http: {
        path: '/get-places-by-campaign/:cid',
        verb: 'get',
        errorStatus: '400'
      },
      accepts: [
        {
          arg: 'cid',
          description: 'campaign id',
          type: 'number',
          required: true
        }
      ]
      ,
      returns: {
        arg: 'code',
        type: 'array',
        root: true
      }
    }
  );

  Campaign.remoteMethod(
    'getActiveCampaigns', {
      description: 'Get all active campaigns',
      http: {
        path: '/get-active-campaigns',
        verb: 'get',
        errorStatus: '400'
      },
      returns: {
        arg: 'code',
        type: 'array',
        root: true
      }
    }
  );

};
