import amqp from "amqplib";
import { RabbitMqConfig } from "./rabbitmq-config.js";

export class RabbitMQConnection {
  amqp;
  config: any;
  connection: any;
  channel: any;

  constructor() {
    this.amqp = amqp;
    this.config = new RabbitMqConfig();
  }

  async connect() {
    this.connection = await amqp.connect(this.config.url);
    console.log('connected to rabbitmw')
  }

  async createChannel() {
    await this.connection.createChannel();
  }

  async assertQueue() {
    await this.channel.assertQueue(this.config.queue, {
      durable: true,
    });
  }

  async publishMessage (message: any) {
    await this.channel.assertExchange(this.config.exchange_name, this.config.exchange_type, {durable: false});

    this.channel.publish(this.config.exchange_name, this.config.secret, Buffer.from(message))
  }

  async consumeMessage () {
    await this.channel.assertExchange(this.config.exchange_name, this.config.exchange_type, {durable: false});
    await this.channel.bindQueue(this.config.queue, this.config.exhange_name, this.config.this.config.secret);

    this.channel.consume(this.config.queue, (message: any) => {
        if(message.content) {
          console.log(message.content.toString())
        }
    })
  }
}
