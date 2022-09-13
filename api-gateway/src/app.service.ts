import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateOrderRequest } from './create-order-request.dto';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE')
    private readonly billingClient: ClientKafka,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  createOrder({ price, userId }: CreateOrderRequest) {
    this.billingClient.emit(
      'order_created',
      new OrderCreatedEvent('123', price, userId),
    );
  }
}
