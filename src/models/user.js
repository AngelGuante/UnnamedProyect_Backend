const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LoginMethod: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_pkey",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
