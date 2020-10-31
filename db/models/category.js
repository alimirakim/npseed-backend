'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {

    static associate(models) {
      this.hasMany(models.TraitType, { foreignKey: 'categoryId' })
    }
  };
  Category.init({
    category: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};