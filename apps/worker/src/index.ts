import {  sequelize } from "@repo/db";
import { RabbitMQConnection } from "./rabbitmq/rabbitmq-connection.js";

async function main() {
    await sequelize.authenticate();

    const rabbitmq = new RabbitMQConnection();
    await rabbitmq.connect()
    await rabbitmq.createChannel()

    await rabbitmq.consumeMessage()

}

main()
