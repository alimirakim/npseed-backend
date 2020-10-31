'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Generator extends Model {

    static associate(models) {
      this.hasMany(models.GenTrait, {foreignKey: "genId"})
    }
  };
  Generator.init({
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Generator',
  });
  return Generator;
};