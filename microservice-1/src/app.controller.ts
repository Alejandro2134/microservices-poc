import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('MICROSERVICE1_SERVICE') private client: ClientProxy,
  ) {}

  @Get()
  getHello(): string {
    this.client.emit('hello', { data: 'Hola, microservicio 2!' });
    return this.appService.getHello();
  }
}
