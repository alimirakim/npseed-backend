'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GenTrait extends Model {

    static associate(models) {
      this.belongsTo(models.Generator, { foreignKey: "genId" })
      this.belongsTo(models.Trait, { foreignKey: "traitId" })
      this.belongsTo(models.TraitType, { foreignKey: "traitTypeId" })
    }
  }

  GenTrait.init({
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
    odds: {
      type: DataTypes.FLOAT,
    }
  }, {
    sequelize,
    modelName: 'GenTrait',
  });
  return GenTrait;
};