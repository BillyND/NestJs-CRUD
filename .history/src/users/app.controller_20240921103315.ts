import { Controller, Get, Render } from '@nestjs/common';
import { UsersService } from './users.sercive';

@Controller('user')
export class UserController {
  @Get()
  handleFetchUser() {
const userService = new UsersService()

    return userService.create().
  }
}
