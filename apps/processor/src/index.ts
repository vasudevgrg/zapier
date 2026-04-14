import { OutboxMessage, sequelize } from "@repo/db";
import { RabbitMQConnection } from "./rabbitmq/rabbitmq-connection.js";

async function main() {
    await sequelize.authenticate();

    const rabbitmq = new RabbitMQConnection();
    await rabbitmq.connect()
    await rabbitmq.createChannel()

    while(1) {
        const outbox_messages = await OutboxMessage.findAll({limit: 10});

        outbox_messages.map(message => {
            rabbitmq.publishMessage(message);
        })

        await new Promise(resolve=> setTimeout(resolve, 3000));
    }

}

// main()
