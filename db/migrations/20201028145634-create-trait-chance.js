'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TraitChances', {
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
      chance: {
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

    await queryInterface.addConstraint("TraitChances", {
      fields: ["genId", "traitTypeId", "traitId"],
      type: 'unique',
      // customIndex: true,
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TraitChances');
  }
};