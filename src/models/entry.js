const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entry', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING(200),
      allowNull: true
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
    tableName: 'entry',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "entry_pkey",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
