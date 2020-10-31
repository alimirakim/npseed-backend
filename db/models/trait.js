'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trait extends Model {

    static associate(models) {
      this.hasMany(models.TraitChance, {foreignKey: "traitId"})
      this.hasMany(models.CharTrait, {foreignKey: "traitId"})
      this.belongsTo(models.TraitType, {foreignKey: "traitTypeId"})
      // TODO check if this through thing works
      this.belongsTo(models.User, { through: "CharTraits", foreignKey: "traitId" })
      this.belongsTo(models.Character, { through: "CharTraits", foreignKey: "traitId" })
      this.belongsTo(models.Category, { through: "TraitTypes", foreignKey: "categoryId" })
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