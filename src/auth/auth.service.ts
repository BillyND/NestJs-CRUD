import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user: any = await this.usersService.findOneByEmail(email);
    console.log('===>here');

    const isValidPassword = await this.usersService.isValidPassword(
      pass,
      user?.password,
    );

    if (isValidPassword) {
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };

    console.log('===>here');
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
