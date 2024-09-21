import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class UserController {
  @Get()
  handleFetchUser() {
    return '';
  }
}
