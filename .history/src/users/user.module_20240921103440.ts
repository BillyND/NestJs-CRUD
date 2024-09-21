import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { catsProviders } from './cats.providers';
import { DatabaseModule } from '../database/database.module';
import { UsersController } from './app.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [CatsService, ...catsProviders],
})
export class CatsModule {}
