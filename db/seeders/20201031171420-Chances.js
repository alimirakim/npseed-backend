'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Chances", [
      { GeneratorId: 2, TagId: 1, chance: 0.4 },
      { GeneratorId: 2, TagId: 2, chance: 0.4 },
      { GeneratorId: 2, TagId: 3, chance: 0.2 },
    ])

    // TODO Is it possible to add a constraint so odds never over 1.0 per trait
    // type?
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Chances', null, {})
  }
};
