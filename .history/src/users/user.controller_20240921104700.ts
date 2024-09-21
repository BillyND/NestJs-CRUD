import { Controller, Get } from '@nestjs/common';
import { UsersService } from './user.service';
import { UserSchema } from './user.schema';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('all')
  async handleGetAllUser() {
    return 'Done';
  }
}
