import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka, EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { OrderCreatedEvent } from './order-created.event';

@Controller()
export class AppController implements OnModuleInit {
  constructor(
    private readonly appService: AppService,
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('order_created')
  handleOrderCreated(data: any) {
    console.log('hector', data);
    this.appService.handleOrderCreated(
      new OrderCreatedEvent(data.orderId, data.price, data.userId),
    );
  }

  onModuleInit() {
    this.authClient.subscribeToResponseOf('get_user');
  }
}
