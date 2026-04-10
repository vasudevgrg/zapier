import { Action, AvailableAction, AvailableTrigger, OutboxMessage, Trigger, User, Zap, ZapRun } from "@repo/db";
import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
  database: "zapier_db",
  username: "neondb_owner",
  password: "npg_7EGBesXQb4Fy",
  host: "ep-cool-mouse-a1fk4csi-pooler.ap-southeast-1.aws.neon.tech",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },

  models: [User, Zap, ZapRun, Trigger, Action, AvailableAction, AvailableTrigger, OutboxMessage],
});
