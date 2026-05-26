export class RabbitMqConfig {
    url: string;
    exchange_name: string;
    exchange_type: string;
    queue: string;
    secret: string;
    binding_key: string;
    routing_key: string;


    constructor( ) {
        this.url = 'amqp://localhost:5672',
        this.exchange_name= 'zapier_exchange',
        this.exchange_type= 'fanout',
        this.secret = '',
        this.queue= 'zapier_queue'
        this.binding_key= '',
        this.routing_key=''
    }
}