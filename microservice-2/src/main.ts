import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://kalo:kalo@localhost:5672'],
        queue: 'micro-poc',
        queueOptions: {
          durable: true,
        },
      },
    },
  );

  await app.listen();
}

bootstrap();
