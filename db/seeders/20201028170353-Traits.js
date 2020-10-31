'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Traits", [
      { traitTypeId: 1, trait: "human" },
      { traitTypeId: 1, trait: "dragonborn" },
      { traitTypeId: 1, trait: "satyr" },
      { traitTypeId: 1, trait: "halfling" },
      { traitTypeId: 1, trait: "tiefling" },
      { traitTypeId: 1, trait: "aasimar" },
      { traitTypeId: 2, trait: "child" },
      { traitTypeId: 2, trait: "adult" },
      { traitTypeId: 2, trait: "elder" },
      { traitTypeId: 3, trait: "boy" },
      { traitTypeId: 3, trait: "girl" },
      { traitTypeId: 3, trait: "neutral" },
      { traitTypeId: 3, trait: "fluid" },
      { traitTypeId: 4, trait: "fighter" },
      { traitTypeId: 4, trait: "noble" },
      { traitTypeId: 4, trait: "peasant" },
      { traitTypeId: 4, trait: "merchant" },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Traits', null, {})
  }
}
