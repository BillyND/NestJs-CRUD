import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { hash as hashBcrypt } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  isValidEmail(email: string) {
    const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regExp.test(email);
  }

  async getHashPassword(plain: string) {
    const hash = await hashBcrypt(plain, 10).then((hash: string) => hash);
    return hash;
  }

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await this.getHashPassword(createUserDto.password);

    if (!this.isValidEmail(createUserDto.email)) {
      return { message: 'Email is invalid!', success: false };
    }

    const result = await this.userModel
      .create({ ...createUserDto, password: hashedPassword })
      .catch((e) => e);

    if (!result?._id) {
      return {
        success: false,
        ...result,
      };
    }

    return { success: true };
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
