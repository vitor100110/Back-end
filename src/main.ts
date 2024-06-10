import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "dotenv/config";
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();
