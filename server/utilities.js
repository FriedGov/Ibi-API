module.exports = {

  /**
   * Send a remove task to the database
   * @param model the model you want to delete something from
   * @param query the query
   * @param cb the callback
   */
  remove: function (model, query, cb) {
    model.destroyAll(query, function (err, doc) {
      if (err) {
        console.error(err);
        cb(err);
      }
      else {
        cb(err,doc);
      }
    })
  },

  /**
   * Send an add task to the database
   * @param model the model of the tabel you want to add something to
   * @param query the query
   * @param orgCb the origional callback from the method were you are calling from
   * @param returnValue the object were the result will be stored into
   */
  add: function (model, query, orgCb, returnValue) {
    model.create(query, function (err, doc) {
      if (err) {
        orgCb(err);
      }
      else {
        return returnValue(doc);
      }
    });
  },

  /**
   * Send a find task to the database
   * @param model the model of the tabel you want to send a find task to
   * @param query the query
   * @param cb the original callback from the model you are calling from
   * @param returnValue the value that is found
   */
  find: function (model, query, cb, returnValue) {
    model.find(query, function (err, doc) {
      if (err) {
        cb(err);
      }
      else {
        return returnValue(doc);
      }

    });
  },

  /**
   * Send a raw sql query to the database
   * @param ds the datasource
   * @param query the query
   * @param cb the callback
   */
  sendSql : function(ds,query, cb) {
    var params = [1];
    ds.connector.query(query, params, function (err, doc) {
      cb(err,doc);
    });
  },

  /**
   * Get a variable from a json file
   * @param stringValue the string
   * @param variable the value you want to get from the json
   */
  jsonParser: function (stringValue, variable) {
    var string = JSON.stringify(stringValue);
    var objectValue = JSON.parse(string);
    return objectValue[variable];
  }
};
