import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { USER_MODEL } from './constants';

@Injectable()
export class CatsService {
  constructor(
    @Inject(USER_MODEL)
    private userModal: Model<any>,
  ) {}

  async create(createUserDto: CreateCatDto): Promise<any> {
    const createdCat = new this.userModal(createUserDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}
