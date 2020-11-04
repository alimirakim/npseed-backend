'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TagType extends Model {

    static associate(models) {
      this.hasMany(models.Tag)
      // this.belongsToMany(models.TraitType, {through: models.TagTypesOfTraitTypes})
      // this.belongsToMany(models.Chance, { through: 'TagTypeChances' })
    }
  };
  TagType.init({
    tagType: {
      allowNull: false,
      validate: { notEmpty: true },
      type: DataTypes.STRING(250),
    },
  }, {
    sequelize,
    modelName: 'TagType',
  });
  return TagType;
};