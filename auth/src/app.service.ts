import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AppService {
  private readonly users = [
    {
      userId: '123',
      stripeUserId: '4242',
    },
    {
      userId: '345',
      stripeUserId: '2727272',
    },
    {},
  ];
  getHello(): string {
    return 'Hello World!';
  }
  getUser(getUserRequest: GetUserRequest) {
    return this.users.find((user) => user.userId === getUserRequest.userId);
  }
}
