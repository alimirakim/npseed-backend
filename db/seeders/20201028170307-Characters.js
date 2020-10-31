'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Characters", [
      {userId: 1, name: "Lucien Leavitt"},
      {userId: 1, name: "Rosalyn Reddish"},
      {userId: 2, name: "Heather Hemlock"},
      {userId: 2, name: "Viridian Velvet"},
      {userId: 2, name: "Ashen Dawn"},
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Characters', null, {})
  }
};
