import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor() {}

  @EventPattern('hello')
  getHello(data: Record<string, unknown>) {
    console.log(data);
  }
}
