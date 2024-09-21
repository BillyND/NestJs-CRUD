import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppController } from './app.controller';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const appController = new AppController();

  console.log('===>here2');
}
bootstrap();
