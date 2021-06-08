import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { LoggerService } from 'src/@core/services/logger.service';
import { userTypeModel } from '../models/userType.model';
import { GeradorUuidService } from './geradoruuid.service';


@Injectable()
export class UserTypeService {
  constructor(
    private _logger: LoggerService,
    private _geradorUUID:GeradorUuidService,
    @InjectModel(userTypeModel)
    private _userModel: typeof userTypeModel,
  ) {}

  async getAll(): Promise<userTypeModel[]> {
    return await this._userModel.findAll();
  }
  async get(id): Promise<userTypeModel> {
    return await this._userModel.findByPk(id);
  }
  async newUserType(type) {
    let uuid = this._geradorUUID.uuidv4()
    type.id = uuid
    let user_type = await this._userModel.create(type);
    this._logger.infoLog(`New user type id ${type.id}`)
    return user_type
  }
  async updateUser(user): Promise<[number, userTypeModel[]]> {
    let result = this._userModel.update(user, {
      where: {
        id: user.id,
      },
    });
    this._logger.infoLog(`User type id ${user.id} was deleted!`)
    return result
  }
  async deleteUser(id) {
    const user: userTypeModel = await this.get(id);
    let result = user?.destroy()
      ? (() => {
          user.destroy();
          return { message: `Deleted user type id: ${user.id}`, cod: 410 };
        })()
      : `Not user type with id '${id}'`;
    this._logger.infoLog(result)
    return result
  }
}
