import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/users/services/token.service';
@Injectable()
export class RoleWsGuard implements CanActivate {
  constructor(
    @Inject(() => TokenService)
    private _tokenService: TokenService,
    private _reflector: Reflector,
  ) {}
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

    return this._tokenService.verifyToken(data.token);
  }
}
