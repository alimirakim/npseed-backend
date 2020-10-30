'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CharTrait extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Character, {foreignKey: "charId"})
      this.belongsTo(models.Trait, {foreignKey: "traitId"})
      this.belongsTo(models.TraitOption, {foreignKey: "traitOptionId"})
    }
  };
  CharTrait.init({
    charId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    traitId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    traitOptionId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'CharTrait',
  });
  return CharTrait;
};