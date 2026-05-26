"use strict";

/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("OutboxMessages", "status", {
      type: Sequelize.ENUM("sent", "pending"),
      allowNull: true,
      defaultValue: "pending",
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn("OutboxMessages", "status");
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_OutboxMessages_status";'
    );
  },
};
