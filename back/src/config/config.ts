import { Injectable } from '@nestjs/common';
import { UserTypeService } from 'src/users/services/userType.service'


const INIT_TYPES =[
    {description:'Admin',active:1},
    {description:'User',active:1},
    {description:'bloger',active:0},
]
@Injectable()
export class ConfigInit{

    constructor(private _userTypesService:UserTypeService){
        this.init()
    }
    async init(){
        let types = await this._userTypesService.getAll()
        if(types.length == 0){
            INIT_TYPES.forEach(element => {
                this._userTypesService.newUserType(element)
            });
        }
    }
}