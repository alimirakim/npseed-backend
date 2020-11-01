'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert("CharTraits", [
      { CharacterId: 1, TraitTypeId: 1, TraitId: 1 },
      { CharacterId: 1, TraitTypeId: 2, TraitId: 8 },
      { CharacterId: 1, TraitTypeId: 3, TraitId: 10 },
      { CharacterId: 1, TraitTypeId: 4, TraitId: 14 },
      { CharacterId: 5, TraitTypeId: 1, TraitId: 6 },
      { CharacterId: 5, TraitTypeId: 2, TraitId: 9 },
      { CharacterId: 5, TraitTypeId: 3, TraitId: 11 },
      { CharacterId: 5, TraitTypeId: 4, TraitId: 15 },
      { CharacterId: 2, TraitTypeId: 1, TraitId: 6 },
      { CharacterId: 1, TraitTypeId: 7, TraitId: 20 },
      { CharacterId: 1, TraitTypeId: 8, TraitId: 22 },
      // {charId: , traitTypeId: , traitId: },
    ])
    // TODO is it possible to constraint so the trait must be of the matching traitType?
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CharTraits', null, {})
  }
};
