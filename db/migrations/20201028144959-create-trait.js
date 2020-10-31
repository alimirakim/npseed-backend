'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Trait', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      trait: {
        allowNull: false,
        unique: trait,
        type: Sequelize.STRING,
      },
      traitTypeId: {
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
      fields: ["traitTypeId", "trait"],
      type: 'unique',
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Traits');
  }
};