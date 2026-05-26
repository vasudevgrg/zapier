import amqp, { type Channel, type ChannelModel, type ConsumeMessage } from "amqplib";
import { RabbitMqConfig } from "./rabbitmq-config.js";

export class RabbitMQConnection {
  amqp;
  config: RabbitMqConfig;
  connection?: ChannelModel;
  channel?: Channel;

  constructor() {
    this.amqp = amqp;
    this.config = new RabbitMqConfig();
  }

  async connect() {
    this.connection = await amqp.connect(this.config.url);
    console.log('connected to rabbitmw')
  }

  async createChannel() {
    if (!this.connection) {
      throw new Error("RabbitMQ connection has not been created");
    }
    this.channel = await this.connection.createChannel();
  }

  async assertQueue() {
    if (!this.channel) {
      throw new Error("RabbitMQ channel has not been created");
    }
    await this.channel.assertQueue(this.config.queue, {
      durable: true,
    });
  }

  async publishMessage (message: unknown) {
    if (!this.channel) {
      throw new Error("RabbitMQ channel has not been created");
    }
    await this.channel.assertExchange(this.config.exchange_name, this.config.exchange_type, {durable: false});

    this.channel.publish(this.config.exchange_name, this.config.secret, Buffer.from(JSON.stringify(message)))
  }

  async consumeMessage () {
    if (!this.channel) {
      throw new Error("RabbitMQ channel has not been created");
    }
    await this.channel.assertExchange(this.config.exchange_name, this.config.exchange_type, {durable: false});
    await this.channel.bindQueue(this.config.queue, this.config.exchange_name, this.config.secret);

    const channel = this.channel;

    channel.consume(this.config.queue, (message: ConsumeMessage | null) => {
        if (!message) {
          return;
        }
        if(message.content) {
          console.log(message.content.toString())
        }
        channel.ack(message)
    })

  }
}
