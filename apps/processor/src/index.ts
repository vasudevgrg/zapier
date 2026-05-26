import { OutboxMessage, sequelize } from "@repo/db";
import { RabbitMQConnection } from "./rabbitmq/rabbitmq-connection.js";

async function main() {
  await sequelize.authenticate();

  const rabbitmq = new RabbitMQConnection();
  await rabbitmq.connect();
  await rabbitmq.createChannel();

  while (1) {
    const outbox_messages = await OutboxMessage.findAll({
        where: { status: "pending" },
      limit: 10,
    });
    // console.log("outbox_messages: ", outbox_messages);

    outbox_messages.map(async (message) => {
    //   console.log("message: ", message);
    console.log('message received')
      rabbitmq.publishMessage(message);
      message.markAsSent();
      await message.save();
    });

    await new Promise((resolve) => setTimeout(resolve, 6000));
  }
}

main();
