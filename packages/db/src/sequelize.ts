import "dotenv/config";
import { Sequelize } from "sequelize-typescript";
import { Action } from "./models/action.model";
import { AvailableAction } from "./models/available-action.model";
import { AvailableTrigger } from "./models/available-trigger.model";
import { OutboxMessage } from "./models/outbox-message.model";
import { Trigger } from "./models/trigger.model";
import { User } from "./models/user.model";
import { Zap } from "./models/zap.model";
import { ZapRun } from "./models/zap-run.model";

const dbModels = [
  User,
  Zap,
  ZapRun,
  Trigger,
  Action,
  AvailableAction,
  AvailableTrigger,
  OutboxMessage,
];

export function createSequelize() {
  return new Sequelize({
    database: process.env.DB_NAME ?? "zapier_db",
    username: process.env.DB_USER ?? "neondb_owner",
    password: process.env.DB_PASSWORD ?? "npg_7EGBesXQb4Fy",
    host: process.env.DB_HOST ?? "ep-cool-mouse-a1fk4csi-pooler.ap-southeast-1.aws.neon.tech",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    models: dbModels,
  });
}

export const sequelize = createSequelize();
