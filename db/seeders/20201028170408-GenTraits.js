'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("GenTraits", [
      { genId: 2, traitTypeId: 1, traitId: 1, odds: 0.5 },
      { genId: 2, traitTypeId: 1, traitId: 2, odds: 0.1 },
      { genId: 2, traitTypeId: 1, traitId: 3, odds: 0.1 },
      { genId: 2, traitTypeId: 1, traitId: 4, odds: 0.1 },
      { genId: 2, traitTypeId: 1, traitId: 5, odds: 0.1 },
      { genId: 2, traitTypeId: 1, traitId: 6, odds: 0.1 },
    ])

    // TODO Is it possible to add a constraint so odds never over 1.0 per trait
    // type?
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('GenTraits', null, {})
  }
};
