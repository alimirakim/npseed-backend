'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Traits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      trait: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      TraitTypeId: {
        allowNull: false,
        references: { model: 'TraitTypes' },
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
    });

    await queryInterface.addConstraint("Traits", {
      fields: ["TraitTypeId", "trait"],
      type: 'unique',
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Traits');
  }
};