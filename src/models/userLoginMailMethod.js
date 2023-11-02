const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userLoginMailMethod', {
    ID: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Mail: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 'userLoginMailMethod',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "userLoginMailMethod_pkey",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
