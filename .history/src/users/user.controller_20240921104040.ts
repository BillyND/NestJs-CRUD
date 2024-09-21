import { Controller, Get } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('all')
  handleGetAllUser() {
    this.userService.create({ name: 'oke' });

    return '222';
  }
}
