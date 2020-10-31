'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert("CharTraits", [
      {charId: 1, traitTypeId: 1, traitId: 1},
      {charId: 1, traitTypeId: 2, traitId: 8},
      {charId: 1, traitTypeId: 3, traitId: 10},
      {charId: 1, traitTypeId: 4, traitId: 14},
      {charId: 5, traitTypeId: 1, traitId: 6},
      {charId: 5, traitTypeId: 2, traitId: 9},
      {charId: 5, traitTypeId: 3, traitId: 11},
      {charId: 5, traitTypeId: 4, traitId: 15},
      {charId: 2, traitTypeId: 1, traitId: 6},
      // {charId: , traitTypeId: , traitId: },
    ])
    // TODO is it possible to constraint so the trait must be of the matching traitType?
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CharTraits', null, {})
  }
};
