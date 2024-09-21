import { Controller, Get, Render } from '@nestjs/common';
import { UsersService } from './users.sercive';

@Controller('user')
export class UserController {
  @Get()
  handleFetchUser() {
    return ( new UsersService()).create().
  }
}
