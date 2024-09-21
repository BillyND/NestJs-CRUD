import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_MODEL } from './constants';
import { UserSchema } from './user.schema';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_MODEL)
   ) {}

  async create(createUserDto: any): Promise<any> {
    const createdUser = await UserSchema.add(createUserDto);
    return createdUser;
  }

 
}
