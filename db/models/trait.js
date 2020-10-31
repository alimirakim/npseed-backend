'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trait extends Model {

    static associate(models) {
      this.hasMany(models.GenTrait, {foreignKey: "traitId"})
      this.hasMany(models.CharTrait, {foreignKey: "traitId"})
      this.belongsTo(models.TraitType, {foreignKey: "traitTypeId"})
    }
  };
  Trait.init({
    traitTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    trait: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  }, {
    sequelize,
    modelName: 'Trait',
  });
  return Trait;
};