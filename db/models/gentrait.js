'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GenTrait extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Generator, {foreignKey: "genId"})
      this.belongsTo(models.Trait, {foreignKey: "traitId"})
      this.belongsTo(models.TraitOption, {foreignKey: "traitOptionId"})
    }
  }
  // TODO How to constraint so genid+traitoptionid is unique
  // TODO Check the specifics of Float data type
  GenTrait.init({
    genId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    traitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    traitOptionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    odds: {
      type: DataTypes.FLOAT,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'GenTrait',
  });
  return GenTrait;
};