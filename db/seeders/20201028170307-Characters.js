'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Characters", [
      {UserId: 1, name: "Lucien Leavitt"},
      {UserId: 1, name: "Rosalyn Reddish"},
      {UserId: 2, name: "Heather Hemlock"},
      {UserId: 2, name: "Viridian Velvet"},
      {UserId: 2, name: "Ashen Dawn"},
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Characters', null, {})
  }
};
