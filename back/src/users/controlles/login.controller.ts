import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { LoginService } from '../services/login.service';

@Controller('auth')
export class LoginController {
    constructor(private _loginService:LoginService){}

    @Get(':email/:password')
    async login(@Param('email') email:string,@Param('password') password:string){
        return await this._loginService.getLogin(email,password)
    }
    
}   
