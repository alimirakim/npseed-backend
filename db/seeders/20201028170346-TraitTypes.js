'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("TraitTypes", [
            { CategoryId: 1, traitType: "Race" },
            { CategoryId: 1, traitType: "Age" },
            { CategoryId: 1, traitType: "Gender" },
            { CategoryId: 1, traitType: "Occupation" },
            { CategoryId: 2, traitType: "Hair" }, // 5
            { CategoryId: 2, traitType: "Eyes" },
            { CategoryId: 2, traitType: "Skin" },
            { CategoryId: 2, traitType: "Physique" },
            { CategoryId: 3, traitType: "Demeanor" },
            { CategoryId: 3, traitType: "Mannerism" }, // 10
            { CategoryId: 3, traitType: "Hobby" },
            { CategoryId: 4, traitType: "Wish" },
            { CategoryId: 4, traitType: "Fear" },
            { CategoryId: 4, traitType: "Secret" },
            // { CategoryId: 5, traitType: "Intelligence"}, // 15
            // { CategoryId: 5, traitType: "Charisma"},
            // { CategoryId: 5, traitType: "Wisom"},
            // { CategoryId: 5, traitType: "Strength"},
            // { CategoryId: 5, traitType: "Constitution"},
            // { CategoryId: 5, traitType: "Dexterity"}, // 20
            { CategoryId: 1, traitType: "Name" },
        ])
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TraitTypes', null, {})
    }
};