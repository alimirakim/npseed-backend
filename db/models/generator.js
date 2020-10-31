'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Generator extends Model {

    static associate(models) {
      this.hasMany(models.Chance)
    }
  };
  Generator.init({
    title: {
      allowNull: false,
      validate: {notEmpty: true},
      type: DataTypes.STRING(250),
    }
  }, {
    sequelize,
    modelName: 'Generator',
  });
  return Generator;
};