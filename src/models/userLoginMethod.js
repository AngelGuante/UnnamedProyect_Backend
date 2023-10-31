const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userLoginMethod', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'ID'
      }
    },
    Name: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'userLoginMethod',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "userLoginMethod_pkey",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
