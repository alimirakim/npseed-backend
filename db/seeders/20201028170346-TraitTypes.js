'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("TraitTypes", [
      { CategoryId: 1, traitType: "race" },
      { CategoryId: 1, traitType: "age" },
      { CategoryId: 1, traitType: "gender" },
      { CategoryId: 1, traitType: "occupation" },
      { CategoryId: 1, traitType: "origin" },
      { CategoryId: 1, traitType: "location" },
      { CategoryId: 2, traitType: "hair"},
      { CategoryId: 2, traitType: "eyes"},
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TraitTypes', null, {})
  }
};
