import { Controller, Get, Render } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('user')
export class UsersController {
  @Get()
  handleFetchUser() {
    return '222';
  }
}
