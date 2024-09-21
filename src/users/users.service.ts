import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { hash as hashBcrypt } from 'bcrypt';
const ObjectId = require('mongodb').ObjectId;

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getHashPassword(plain: string) {
    const hash = await hashBcrypt(plain, 10).then((hash: string) => hash);
    return hash;
  }

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await this.getHashPassword(createUserDto.password);

    const result = await this.userModel
      .create({ ...createUserDto, password: hashedPassword })
      .catch((e) => e);

    const { _id, name, email } = result || {};

    if (!_id) {
      return {
        success: false,
        ...result,
      };
    }

    return { success: true, user: { _id, name, email } };
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(_id: string) {
    try {
      const user = await this.userModel.findById(_id).select('-password');

      if (user) {
        return { success: true, user };
      }

      return { success: false, message: 'User not found!' };
    } catch (error) {
      return { success: false, message: error?.message || 'UNKNOWN' };
    }
  }

  async update(updateUserDto: UpdateUserDto) {
    try {
      const { _id, name, phone } = updateUserDto || {};

      const user = await this.userModel
        .findByIdAndUpdate(_id?.trim(), { name, phone }, { new: true })
        .select('-password');

      if (user) {
        return { success: true, message: 'Updated user', user };
      }

      return { success: false, message: 'User not found!' };
    } catch (error) {
      return { success: false, message: error?.message || 'UNKNOWN' };
    }
  }

  async remove(_id: string) {
    try {
      const user = await this.userModel.findByIdAndDelete(_id?.trim());

      if (user) {
        return { success: true, message: 'Deleted user', user };
      }

      return { success: false, message: 'User not found!' };
    } catch (error) {
      return { success: false, message: error?.message || 'UNKNOWN' };
    }
  }
}
