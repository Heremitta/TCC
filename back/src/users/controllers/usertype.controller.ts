import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TypeUser } from '../models/typeUser.model';
import { UserTypeService } from '../services/userType.service';

@Controller('user_types')
export class UserTypeController {
  constructor(private userService: UserTypeService) {}
  @Get()
  allUserTypes(): Promise<TypeUser[]> {
    return this.userService.getAll();
  }
  @Get(':id')
  userType(@Param() param): Promise<TypeUser> {
    return this.userService.get(param.id);
  }
  @Post()
  newUserType(@Body() user) {
    return this.userService.newUserType(user);
  }
  @Put()
  updateUserType(@Body() user): Promise<[number, TypeUser[]]> {
    return this.userService.updateUser(user);
  }
  @Delete(':id')
  deleteUserType(@Param() param) {
    return this.userService.deleteUser(param.id);
  }
}
