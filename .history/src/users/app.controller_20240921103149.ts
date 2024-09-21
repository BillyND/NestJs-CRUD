import { Controller, Get, Render } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  handleFetchUser() {
    return '222';
  }
}
