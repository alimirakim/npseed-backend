'use strict';
const bcrypt = require('bcryptjs')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      this.hasMany(models.Character, { foreignKey: "userId" })
      this.hasMany(models.Generator, { foreignKey: "userId" })
    }
  }
  User.init({
    username: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(40),
    },
    email: {
      unique: true,
      type: DataTypes.STRING(255),
    },
    hashword: {
      allowNull: false,
      type: DataTypes.STRING(255).BINARY,
    },
  }, {
    sequelize,
    modelName: 'User',
  });


  User.prototype.validatePassword = async function (password) {
    return await bcrypt.compareSync(password, this.hashword.toString())
  }
  return User;
};