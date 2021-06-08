import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { userModel } from '../models/user.model';
import { userTypeModel } from '../models/userType.model';
import { UserService as UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  // @Get('types')
  // allUsersAndTypes(): Promise<{ users: userModel[]; types: userTypeModel[] }> {
  //   return this.userService.userAndType();
  // }
  @Get()
  allUsers(): Promise<userModel[]> {
    return this.userService.getAll();
  }
  @Get(':id')
  user(@Param('id') param): Promise<userModel> {
    return this.userService.get(param);
  }
  @Post()
  newUser(@Body() user: userModel) {
    console.log(user);
    return this.userService.newUser(user);
  }
  @Put()
  updateUser(@Body() user: userModel): Promise<[number, userModel[]]> {
    return this.userService.updateUser(user);
  }
  @Delete(':id')
  deleteUser(@Param('id') param) {
    return this.userService.deleteUser(param);
  }
}
