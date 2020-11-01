'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TagTypes', [
      { tagType: "gender" },
      { tagType: "culture" },
      { tagType: "theme" },
      { tagType: "type" },
      { tagType: "style" },
      { tagType: "popularity" },
      { tagType: "first letter"},
      { tagType: "meaning"},
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TagTypes', null, {})
  }
};
