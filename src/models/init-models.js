var DataTypes = require("sequelize").DataTypes;
var _entry = require("./entry");
var _entryComment = require("./entryComment");
var _user = require("./user");
var _userLoginMailMethod = require("./userLoginMailMethod");
var _userLoginMethod = require("./userLoginMethod");

function initModels(sequelize) {
  var entry = _entry(sequelize, DataTypes);
  var entryComment = _entryComment(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var userLoginMailMethod = _userLoginMailMethod(sequelize, DataTypes);
  var userLoginMethod = _userLoginMethod(sequelize, DataTypes);

  entryComment.belongsTo(entry, { as: "entry", foreignKey: "entryID"});
  entry.hasMany(entryComment, { as: "entryComments", foreignKey: "entryID"});
  entry.belongsTo(user, { as: "user", foreignKey: "userID"});
  user.hasMany(entry, { as: "entries", foreignKey: "userID"});
  entryComment.belongsTo(user, { as: "user", foreignKey: "userID"});
  user.hasMany(entryComment, { as: "entryComments", foreignKey: "userID"});
  userLoginMailMethod.belongsTo(user, { as: "User", foreignKey: "UserID"});
  user.hasMany(userLoginMailMethod, { as: "userLoginMailMethods", foreignKey: "UserID"});
  user.belongsTo(userLoginMethod, { as: "LoginMethod", foreignKey: "LoginMethodID"});
  userLoginMethod.hasMany(user, { as: "users", foreignKey: "LoginMethodID"});

  return {
    entry,
    entryComment,
    user,
    userLoginMailMethod,
    userLoginMethod,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
