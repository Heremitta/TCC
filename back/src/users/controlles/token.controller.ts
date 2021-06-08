import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { TokenService } from '../services/token.service';
import { UserService } from '../services/user.service';

@Controller('token')
export class TokenController {

    constructor(private _userService:UserService,private _tokenService:TokenService){}
    @Get(':token')
    async checkToken(@Param('token')token:string){
        let verify =  await this._tokenService.verifyToken(token)
        if("userId" in verify){
            let r = await this._userService.get(verify.userId)
            return r
        }
        console.log(verify)
        throw new HttpException({
            status:HttpStatus.UNAUTHORIZED,
            error:'User need to login again!'
        },HttpStatus.UNAUTHORIZED);
        
    }
}
