'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {

    static associate(models) {
      this.hasMany(models.CharTrait, {foreignKey: "charId"})
      this.belongsTo(models.User, {foreignKey: "userId"})
    }
  };
  Character.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};