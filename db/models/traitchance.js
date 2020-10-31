'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TraitChance extends Model {

    static associate(models) {
      this.belongsTo(models.Generator, { foreignKey: "genId" })
      this.belongsTo(models.Trait, { foreignKey: "traitId" })
      this.belongsTo(models.TraitType, { foreignKey: "traitTypeId" })
    }
  }

  TraitChance.init({
    genId: {
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
    chance: {
      type: DataTypes.FLOAT,
    }
  }, {
    sequelize,
    modelName: 'TraitChance',
  });
  return TraitChance;
};