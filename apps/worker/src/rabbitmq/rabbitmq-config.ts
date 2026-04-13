export class RabbitMqConfig {
    url: string;
    exchange_name: string;
    exchange_type: string;
    queue: string;
    secret: string;


    constructor( ) {
        this.url = 'amqp://localhost:5672',
        this.exchange_name= 'zapier_exchange',
        this.exchange_type= 'fanout',
        this.secret = '',
        this.queue= 'zapier_queue'
    }
}