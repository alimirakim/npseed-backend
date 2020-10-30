'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.CharTrait, {foreignKey: "charId"})
      this.belongsTo(models.User, {foreignKey: "userId"})
    }
  };
  Character.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};