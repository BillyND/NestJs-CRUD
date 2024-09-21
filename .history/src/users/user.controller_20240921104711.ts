import { Controller, Get } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('user')
export class UsersController {
  @Get('all')
  async handleGetAllUser() {
    return 'Done';
  }
}
