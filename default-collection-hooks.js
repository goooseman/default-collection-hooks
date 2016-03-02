Mongo.Collection.prototype.defaultCollectionHooks = function (opts = {}) {
  let collection = this;

  let defaults = {
    createdAt: true,
    modifiedAt: true,
    createdBy: true,
    modifiedBy: true
  };

  let options = Object.assign(defaults, opts);

  collection.before.insert(function (userId, doc) {
    if (options.createdAt) {
      doc.createdAt = Date.now();
    }
    if (options.createdBy && userId) {
      doc.createdBy = userId;
    }
  });

  collection.before.update(function (userId, doc, fieldNames, modifier) {
    modifier.$set = modifier.$set || {};
    if (options.modifiedAt) {
      modifier.$set.modifiedAt = Date.now();
    }
    if (options.modifiedBy && userId) {
      modifier.$set.modifiedBy = userId;
    }
  });
};
