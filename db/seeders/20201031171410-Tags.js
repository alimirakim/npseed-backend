'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tags', [
      { tag: "boy", TagTypeId: 1, },
      { tag: "girl", TagTypeId: 1, },
      { tag: "unisex", TagTypeId: 1, },
      
      { tag: "eastern", TagTypeId: 2, },
      { tag: "western", TagTypeId: 2, },
      
      { tag: "nature", TagTypeId: 3, },
      { tag: "astronomy", TagTypeId: 3, },
      { tag: "geology", TagTypeId: 3, },
      
      { tag: "full", TagTypeId: 4, },
      { tag: "nickname", TagTypeId: 4, },
      
      { tag: "cute", TagTypeId: 5, },
      { tag: "nerdy", TagTypeId: 5, },
      { tag: "fancy", TagTypeId: 5, },
      
      { tag: "common", TagTypeId: 6, },
      { tag: "rare", TagTypeId: 6, },
      
      { tag: "A", TagTypeId: 7, },
      { tag: "B", TagTypeId: 7, },
      { tag: "C", TagTypeId: 7, },
      
      { tag: "hope", TagTypeId: 8, },
      { tag: "love", TagTypeId: 8, },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
