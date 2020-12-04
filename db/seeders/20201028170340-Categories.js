'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Categories', [
            { category: "essentials" },
            { category: "appearance" },
            { category: "personality" },
            { category: "story" },
            // { category: "stats" },
        ])
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Categories', null, {})
    }
}