import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_MODEL } from './constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_MODEL)
    private userModal: Model<any>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<any> {
    const createdCat = new this.userModal(createUserDto);
    return createdCat.save();
  }

  async findAll(): Promise<any[]> {
    return this.userModal.find().exec();
  }
}
