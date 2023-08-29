import { Controller, Post, Body } from '@nestjs/common';
//import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
//import { AuthService } from '../auth/auth.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    //private readonly authService: AuthService,
  ) {}

  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  // @UseGuards(AuthGuard('local'))
  // @Post('login')
  // async loginUser(@Body() loginUserDto: CreateUserDto) {
  //   return this.authService.login(loginUserDto);
  // }
}
