import { Controller, Get, Render } from '@nestjs/common';
import { UsersService } from './users.sercive';

@Controller('user')
export class UsersController {
  @Get()
  handleFetchUser() {
    return '222';
  }
}
