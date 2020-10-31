'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GenTraits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      genId: {
        allowNull: false,
        references: { model: 'Generators' },
        type: Sequelize.INTEGER,
      },
      traitId: {
        allowNull: false,
        references: { model: 'Traits' },
        type: Sequelize.INTEGER,
      },
      traitTypesId: {
        allowNull: false,
        references: { model: 'TraitTypes' },
        type: Sequelize.INTEGER,
      },
      odds: {
        type: Sequelize.FLOAT,
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

    await queryInterface.addConstraint("GenTraits", {
      fields: ["genId", "traitId"],
      type: 'unique',
      // customIndex: true,
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('GenTraits');
  }
};