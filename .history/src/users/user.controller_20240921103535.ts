import { Controller, Get, Render } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  @Get()
  handleFetchUser() {
    return '222';
  }
}
