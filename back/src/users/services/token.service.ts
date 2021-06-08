import { Injectable } from '@nestjs/common';
import {sign, decode,verify,} from 'jsonwebtoken'
import { login } from '../models/login.model';
import * as fs from 'fs'
import { of } from 'rxjs';

const PRIVATE_KEY = fs.readFileSync('src/config/keys.key').toString()
@Injectable()
export class TokenService {

    constructor(){
        
    }

    signToken(payload){
        
        if(payload.dataValues){
            return sign(payload.dataValues,PRIVATE_KEY,{expiresIn:'1H'})
        }else{
            return sign(payload,PRIVATE_KEY,{expiresIn:'1H'})
        }
    }

    async verifyToken(token){
        let result = await((() :Promise<any> => {
            let r
            verify(token, PRIVATE_KEY, (err, res) => {
                if (err) {
                    r = err
                }else{
                    r = of(this.decodeToken(token)).toPromise();
                }
            })
            return r
        }))()
        return result
    }
    decodeToken(token):login | void{
        return verify(token, PRIVATE_KEY, (err, result)=>{
            if (err){
                throw err
            }
            return result
        });
    }
}
