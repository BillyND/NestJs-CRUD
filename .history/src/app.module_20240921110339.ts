import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersController } from './users/user.controller';

@Module({
  imports: [
    // MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: configService,
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
