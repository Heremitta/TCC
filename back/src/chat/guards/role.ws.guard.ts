import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/users/services/token.service';
import { UserService } from 'src/users/services/user.service';
@Injectable()
export class RoleWsGuard implements CanActivate {
  constructor(
    @Inject(forwardRef(() => UserService))
    private _userService: UserService,
    @Inject(forwardRef(() => TokenService))
    private _tokenService: TokenService,
    private _reflector: Reflector,
  ) {}
  /**
   * @param  {} token
   */
  async userRole(token): Promise<boolean> {
    return (await this._tokenService.verifyToken(token)) && token;
  }
  async adminRole(token): Promise<boolean> {
    const verify = await this._tokenService.verifyToken(token);
    let decoded;
    let resp = false;
    if (verify) {
      decoded = this._tokenService.decodeToken(token);
      resp =
        (await this._userService.userModel.findOne(decoded.userId)) && verify;
    }
    return resp;
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // const [req, res, next] = context.getArgs();
    // const cli = socket.getClient();
    const socket = context.switchToWs();
    const data = socket.getData();
    const roles = this._reflector.get<string>('roles', context.getClass());
    console.log(roles);
    if (!roles) {
      return true;
    }
    switch (roles) {
      case 'user':
        return this.userRole(data.token);
      case 'admin':
        return this.adminRole(data.token);
    }
  }
}
