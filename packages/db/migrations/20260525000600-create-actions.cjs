"use strict";

/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Actions", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      action_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "AvailableActions",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      meta_data: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      zap_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Zaps",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("Actions");
  },
};
