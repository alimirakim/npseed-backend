'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trait extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.TraitOption, {foreignKey: "traitId"})
      this.hasMany(models.GenTrait, {foreignKey: "traitId"})
      this.hasMany(models.CharTrait, {foreignKey: "traitId"})
    }
  };
  Trait.init({
    trait: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Trait',
  });
  return Trait;
};