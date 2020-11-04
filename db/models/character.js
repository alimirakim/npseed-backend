'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {

    static associate(models) {
      this.hasMany(models.CharTrait)
      this.belongsTo(models.User)

      // this.belongsToMany(models.Trait, { through: models.CharTrait })
      // this.belongsToMany(models.TraitType, {through: models.CharTrait})
    }
  };
  Character.init({
    UserId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      validate: { notEmpty: true },
      type: DataTypes.STRING(250),
    },
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};