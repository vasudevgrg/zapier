import {
  AvailableAction,
  AvailableTrigger,
  sequelize,
} from "@repo/db";
import { availableActions, availableTriggers } from "./data.js";

async function seed() {
  await sequelize.authenticate();

  await Promise.all(
    availableTriggers.map((trigger) => AvailableTrigger.upsert(trigger)),
  );

  await Promise.all(
    availableActions.map((action) => AvailableAction.upsert(action)),
  );

  console.log(
    `Seeded ${availableTriggers.length} available trigger(s) and ${availableActions.length} available action(s).`,
  );
}

seed()
  .catch((error) => {
    console.error("Failed to seed primary-backend data:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await sequelize.close();
  });
