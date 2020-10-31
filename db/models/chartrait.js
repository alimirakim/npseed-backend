'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CharTrait extends Model {

    static associate(models) {
      this.belongsTo(models.Character, { foreignKey: "charId" })
      this.belongsTo(models.Trait, { foreignKey: "traitId" })
      this.belongsTo(models.TraitType, { foreignKey: "traitTypeId" })
    }
  };
  CharTrait.init({
    charId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    traitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    traitTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'CharTrait',
  });
  return CharTrait;
};