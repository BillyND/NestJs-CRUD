import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
  RouterModule.register([
    {
      path: 'cats',
       
    },
  ])
})
export class AppModule {}
