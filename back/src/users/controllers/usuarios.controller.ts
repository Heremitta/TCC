import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { user } from '../models/user.model';
import { TypeUser } from '../models/typeUser.model';
import { UserService as UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  // @Get('types')
  // allUsersAndTypes(): Promise<{ users: user[]; types: userType[] }> {
  //   return this.userService.userAndType();
  // }
  @Get()
  allUsers(): Promise<user[]> {
    return this.userService.getAll();
  }
  @Get(':id')
  user(@Param('id') param): Promise<user> {
    return this.userService.get(param);
  }
  @Post()
  newUser(@Body() user: user) {
    console.log(user);
    return this.userService.newUser(user);
  }
  @Put()
  updateUser(@Body() user: user): Promise<[number, user[]]> {
    return this.userService.updateUser(user);
  }
  @Delete(':id')
  deleteUser(@Param('id') param) {
    return this.userService.deleteUser(param);
  }
}
