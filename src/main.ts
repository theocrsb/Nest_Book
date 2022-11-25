import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// type express par default
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(8080);
}
bootstrap();
