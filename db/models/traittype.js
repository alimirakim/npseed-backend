'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TraitType extends Model {

    static associate(models) {
      this.hasMany(models.Trait, { foreignKey: "traitTypeId" })
      this.hasMany(models.GenTrait, { foreignKey: "traitTypeId" })
      this.hasMany(models.CharTrait, { foreignKey: "traitTypeId" })
      this.belongsTo(models.Category, { foreignKey: "categoryId" })
      // TODO Check if this 'through' works.
      this.belongsTo(models.User, { through: "CharTraits", foreignKey: "traitTypeId" })
      this.belongsTo(models.Character, { through: "CharTraits", foreignKey: "traitTypeId" })
    }
  };
  TraitType.init({
    traitType: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(40),
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'TraitType',
  });
  return TraitType;
};