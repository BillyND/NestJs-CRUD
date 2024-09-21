import { Controller, Get } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('user')
export class UsersController {
  constructor(private readonly treeService: UsersService) {}

  @Get('all')
  handleGetAllUser() {
    return '222';
  }
}
