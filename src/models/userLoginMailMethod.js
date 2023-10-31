const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userLoginMailMethod', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Mail: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
