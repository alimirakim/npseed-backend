'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trait extends Model {

    static associate(models) {
      this.hasMany(models.CharTrait)
      this.belongsTo(models.TraitType)

      // TODO check if this through thing works
      this.belongsToMany(models.Character, { through: models.CharTrait })
      this.belongsToMany(models.TagType, { through: "TraitTagTypes" })
    }
  }
  Trait.init({
    trait: {
      type: DataTypes.STRING(250),
      allowNull: false,
      validate: { notEmpty: true },
    },
    TraitTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Trait',
  });
  return Trait;
};