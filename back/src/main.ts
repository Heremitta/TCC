import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

(async () => {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*', //change for production,
    },
    logger: ['log', 'error', 'warn'],
    bodyParser: true,
  });
  app.useGlobalPipes(new ValidationPipe({}));
  app.enableCors();
  await app.listen(3000);
})();
