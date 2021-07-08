import { Inject, Injectable } from '@nestjs/common';
import { UserTypeService } from 'src/users/services/userType.service';

const INIT_TYPES = [
  { description: 'Admin', active: 1 },
  { description: 'User', active: 1 },
];
@Injectable()
export class ConfigInit {
  types: any[];
  constructor(
    @Inject(UserTypeService)
    private _userTypesService: UserTypeService,
  ) {}
  async init() {
    this.types = await this._userTypesService.getAll();
    if (this.types.length == 0) {
      INIT_TYPES.forEach((element) => {
        this._userTypesService.newUserType(element);
      });
    }
  }
}
