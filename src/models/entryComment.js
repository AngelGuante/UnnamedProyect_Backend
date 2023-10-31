const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entryComment', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    entryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'entry',
        key: 'ID'
      }
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 'entryComment',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "entryComment_pkey",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
