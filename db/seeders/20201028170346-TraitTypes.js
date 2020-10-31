'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("TraitTypes", [
      { categoryId: 1, traitType: "race" },
      { categoryId: 1, traitType: "age" },
      { categoryId: 1, traitType: "gender" },
      { categoryId: 1, traitType: "occupation" },
      { categoryId: 1, traitType: "origin" },
      { categoryId: 1, traitType: "location" },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TraitTypes', null, {})
  }
};
