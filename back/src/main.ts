import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    cors:{
      origin:"*" //change for production
    },
    logger: ['log', 'error', 'warn']
  });
  app.useGlobalPipes(new ValidationPipe({}));
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
