"use strict";

/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ZapRuns", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
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
      status: {
        type: Sequelize.ENUM("pending", "running", "completed"),
        allowNull: true,
        defaultValue: "pending",
      },
      current_action: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 1,
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
    await queryInterface.dropTable("ZapRuns");
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_ZapRuns_status";');
  },
};
