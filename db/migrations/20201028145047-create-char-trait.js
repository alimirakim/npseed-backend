'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CharTraits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      charId: {
        allowNull: false,
        references: { model: 'Characters' },
        type: Sequelize.INTEGER,
      },
      traitTypeId: {
        allowNull: false,
        references: { model: 'TraitTypes' },
        type: Sequelize.INTEGER,
      },
      traitId: {
        allowNull: false,
        references: { model: 'Traits' },
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE,
      }
    })

    await queryInterface.addConstraint("CharTraits", {
      fields: ["charId", "traitTypeId"],
      type: 'unique',
      // customIndex: true, // TODO What is this for?
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CharTraits');
  }
};