'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TagTypeChances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      GeneratorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Generators" },
      },
      TagTypeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "TagTypes" },
      },
      chanceLock: {
        allowNull: false,
        type: Sequelize.FLOAT,
        defaultValue: 0.01,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    })
    await queryInterface.addConstraint("TagTypeChances", {
      fields: ["GeneratorId", "TagTypeId"],
      type: "unique",
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TagTypeChances');
  }
};