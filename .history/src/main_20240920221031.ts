import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const appController = new AppService();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  console.log('===>here2'appController.getHello());
}
bootstrap();
