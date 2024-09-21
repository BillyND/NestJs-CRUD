import { Controller, Get } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('all')
  async handleGetAllUser() {
    const res = await this.userService.create({ name: 'oke' });

    return res;
  }
}
