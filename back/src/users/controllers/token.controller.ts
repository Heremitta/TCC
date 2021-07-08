import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { TokenService } from '../services/token.service';
import { UserService } from '../services/user.service';

@Controller('token')
export class TokenController {
  constructor(
    private _userService: UserService,
    private _tokenService: TokenService,
  ) {}
  @Get(':token')
  async checkToken(@Param('token') token: string) {
    const verify = await this._tokenService.verifyToken(token);
    if (verify) {
      if ('userId' in verify) {
        const r = await this._userService.get(verify.userId);
        return r;
      }
    }
    throw new HttpException(
      {
        status: HttpStatus.UNAUTHORIZED,
        error: 'Token was expired! Need to login again!',
      },
      HttpStatus.UNAUTHORIZED,
    );
  }
}
