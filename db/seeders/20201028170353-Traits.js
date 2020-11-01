'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Traits", [
      { TraitTypeId: 1, trait: "human" },
      { TraitTypeId: 1, trait: "dragonborn" },
      { TraitTypeId: 1, trait: "satyr" },
      { TraitTypeId: 1, trait: "halfling" },
      { TraitTypeId: 1, trait: "tiefling" },
      { TraitTypeId: 1, trait: "aasimar" },
      { TraitTypeId: 2, trait: "child" },
      { TraitTypeId: 2, trait: "adult" },
      { TraitTypeId: 2, trait: "elder" },
      { TraitTypeId: 3, trait: "boy" }, // 10
      { TraitTypeId: 3, trait: "girl" },
      { TraitTypeId: 3, trait: "neutral" },
      { TraitTypeId: 3, trait: "fluid" },
      { TraitTypeId: 4, trait: "fighter" },
      { TraitTypeId: 4, trait: "noble" },
      { TraitTypeId: 4, trait: "peasant" },
      { TraitTypeId: 4, trait: "merchant" },
      { TraitTypeId: 7, trait: "black"},
      { TraitTypeId: 7, trait: "brown"},
      { TraitTypeId: 7, trait: "red"}, // 20
      { TraitTypeId: 7, trait: "yellow"},
      { TraitTypeId: 8, trait: "brown"},
      { TraitTypeId: 8, trait: "blue"},
      { TraitTypeId: 8, trait: "green"},
      { TraitTypeId: 8, trait: "purple"},
      
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Traits', null, {})
  }
}
