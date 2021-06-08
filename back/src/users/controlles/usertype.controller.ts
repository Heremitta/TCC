import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { userTypeModel } from '../models/userType.model';
import { UserTypeService } from '../services/userType.service';

@Controller('user_types')
export class UserTypeController {
  constructor(private userService: UserTypeService) {}
  @Get()
  allUserTypes(): Promise<userTypeModel[]> {
    return this.userService.getAll();
  }
  @Get(':id')
  userType(@Param() param): Promise<userTypeModel> {
    return this.userService.get(param.id);
  }
  @Post()
  newUserType(@Body() user) {
    return this.userService.newUserType(user);
  }
  @Put()
  updateUserType(@Body() user): Promise<[number, userTypeModel[]]> {
    return this.userService.updateUser(user);
  }
  @Delete(':id')
  deleteUserType(@Param() param) {
    return this.userService.deleteUser(param.id);
  }
}
