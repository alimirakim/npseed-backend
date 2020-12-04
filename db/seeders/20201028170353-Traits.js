'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
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

            { TraitTypeId: 5, trait: "black" },
            { TraitTypeId: 5, trait: "brown" },
            { TraitTypeId: 5, trait: "red" }, // 20
            { TraitTypeId: 5, trait: "yellow" },

            { TraitTypeId: 6, trait: "brown" },
            { TraitTypeId: 6, trait: "blue" },
            { TraitTypeId: 6, trait: "green" },
            { TraitTypeId: 6, trait: "purple" }, // 25

            { TraitTypeId: 7, trait: "pale" },
            { TraitTypeId: 7, trait: "dark brown" },
            { TraitTypeId: 7, trait: "light brown" },
            { TraitTypeId: 7, trait: "peachy" },

            { TraitTypeId: 8, trait: "bony" }, // 30
            { TraitTypeId: 8, trait: "muscular" },
            { TraitTypeId: 8, trait: "short" },

            { TraitTypeId: 9, trait: "polite" },
            { TraitTypeId: 9, trait: "cruel" },
            { TraitTypeId: 9, trait: "sweet" },

            { TraitTypeId: 10, trait: "bites nails" },
            { TraitTypeId: 10, trait: "walks slowly" },
            { TraitTypeId: 10, trait: "slight stutter" },
            { TraitTypeId: 11, trait: "painting" },
            { TraitTypeId: 11, trait: "coding" }, // 40
            { TraitTypeId: 11, trait: "slaying foes" },
            { TraitTypeId: 12, trait: "riches" },
            { TraitTypeId: 12, trait: "love" },

            { TraitTypeId: 13, trait: "death" },
            { TraitTypeId: 13, trait: "humiliation" }, // 45
            { TraitTypeId: 13, trait: "sickness" },
            { TraitTypeId: 13, trait: "darkness" },
            { TraitTypeId: 13, trait: "commitment" },

            { TraitTypeId: 14, trait: "remembers their past life" },
            { TraitTypeId: 14, trait: "killed an innocent person" }, // 50
            { TraitTypeId: 14, trait: "hid treasure in the mountains" },
            { TraitTypeId: 14, trait: "having an affair with a noble lady" },
            { TraitTypeId: 15, trait: "Sophia" },
            { TraitTypeId: 15, trait: "Ashen" },
            { TraitTypeId: 15, trait: "Dawn" }, // 55
            { TraitTypeId: 15, trait: "Catherine" },
            { TraitTypeId: 15, trait: "Arthur" },
            { TraitTypeId: 15, trait: "Bentley Bingsoo Kim" },
            { TraitTypeId: 15, trait: "Priestess Viridian" },
            { TraitTypeId: 15, trait: "Bora" }, // 60
            { TraitTypeId: 15, trait: "Sung" },
            { TraitTypeId: 15, trait: "Sangsook" },

        ])
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Traits', null, {})
    }
}