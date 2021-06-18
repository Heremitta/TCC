import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Server } from 'socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*', //change for production
    },
    logger: ['log', 'error', 'warn'],
  });
  const io = new Server();
  app.useGlobalPipes(new ValidationPipe({}));
  app.enableCors();
  io.listen(await app.listen(3000));
}
bootstrap();
